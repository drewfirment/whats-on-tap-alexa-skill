/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This sample shows how to create a Lambda function for handling Alexa Skill requests that:
 *
 * - Custom slot type: demonstrates using custom slot types to handle a finite set of known values
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask What's On Tap whats on tap at a local brewery"
 *  Alexa: "(reads back tap list for local brewery)"
 */

'use strict';

var AlexaSkill = require('./AlexaSkill'),
    taplists = require('./taplists');

var APP_ID = undefined; 'amzn1.echo-sdk-ams.app.67f14a05-d628-4e8e-9788-51b7e5e7a12b';

/**
 * Taplist is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Taplist = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Taplist.prototype = Object.create(AlexaSkill.prototype);
Taplist.prototype.constructor = Taplist;

Taplist.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechText = "Welcome to Whats On Tap. You can ask a question like, what's on tap at Hardywood? ... Now, what can I help you with.";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "For instructions on what you can say, please say help me.";
    response.ask(speechText, repromptText);
};

Taplist.prototype.intentHandlers = {
    "TapListIntent": function (intent, session, response) {
        var itemSlot = intent.slots.Item,
            itemName;
        if (itemSlot && itemSlot.value){
            itemName = itemSlot.value.toLowerCase();
        }

        var cardTitle = "Tap List for " + itemName,
            taplist = taplists[itemName],
            speechOutput,
            repromptOutput;
        if (taplist) {
            speechOutput = {
                speech: taplist,
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            response.tellWithCard(speechOutput, cardTitle, taplist);
        } else {
            var speech;
            if (itemName) {
                speech = "I'm sorry, I currently do not know the whats on tap for " + itemName + ". What else can I help with?";
            } else {
                speech = "I'm sorry, I currently do not know that brewery. What else can I help with?";
            }
            speechOutput = {
                speech: speech,
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            repromptOutput = {
                speech: "What else can I help with?",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            response.ask(speechOutput, repromptOutput);
        }
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = "You can ask whats on tap at a local brewery such as, whats on tap at Midnight, or, you can say exit... Now, what can I help you with?";
        var repromptText = "You can say things like, what's on tap at Strangeways or you can say exit... Now, what can I help you with?";
        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechOutput, repromptOutput);
    }
};

exports.handler = function (event, context) {
    var tapList = new TapList();
    tapList.execute(event, context);
};
