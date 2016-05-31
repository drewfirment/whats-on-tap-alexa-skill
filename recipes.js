/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

module.exports = {
"elastic cloud compute": "Host the bits of things you think of as a computer.",
"i.a.m.": "Set up additional users, set up new AWS Keys and policies.",
"simple storage service": "Store images and other assets for websites. Keep backups and share files between services. Host static websites. Also, many of the other AWS services write and read from S3.",
"v.p.c.": "Overcome objections that all our stuff is on the internet by adding an additional layer of security. Makes it appear as if all of your AWS services are on the same little network instead of being small pieces in a much bigger network.",
"lambda": "Run little self contained snippets of JS, Java or Python to do discrete tasks. Sort of a combination of a queue and execution in one. Used for storing and then executing changes to your AWS setup or responding to events in S3 or DynamoDB.",
"a.p.i. gateway": "Proxy your apps API through this so you can throttle bad client traffic, test new versions, and present methods more cleanly.",
"r.d.s.": "Your applications Mysql, Postgres, and Oracle database.",
"s.e.s.": "Send one-off emails like password resets, notifications, etc. You could use it to send a newsletter if you wrote all the code, but that's not a great idea.",
"cloud front": "Make your websites load faster by spreading out static file delivery to be closer to where your users are.",
"cloud search": "Pull in data on S3 or in RDS and then search it for every instance of a word.",
"dynamoDB": "Your applications massively scalable key valueish store.",
"elasticache": "Your applications Memcached or Redis.",
"elastic transcoder": "Deal with video weirdness like change formats and compression",
"s.q.s.": "Store data for future processing in a queue. The lingo for this is storing messages but it doesn't have anything to do with email or SMS. SQS doesn't have any logic, it's just a place to put things and take things out.",
"waf": "Block bad requests to Cloudfront protected sites ",
"cognito": "Give end users the ability to log in with Google, Facebook, or LinkedIn",
"device farm": "Test your app on a bunch of different IOS and Android devices simultaneously.",
"mobile analytics": "Track what people are doing inside of your app.",
"s.n.s.": "Send mobile notifications, emails or SMS messages",
"code commit": "Version control your code with hosted Git.",
"code deploy": "Get your code from your CodeCommit repo (or Github) onto a bunch of EC2 instances in a sane way.",
"code pipeline": "Run automated tests on your code and then do stuff with it depending on if it passes those tests.",
"e.c.s.": "Put a Dockerfile into an EC2 instance so you can run a website.",
"elastic beanstalk": "Move your app hosted on Heroku to AWS when it gets too expensive.",
"app stream": "Put a copy of a Windows application on a Windows machine that people get remote access to.",
"direct sonnect": "Pay your Telco plus AWS to get a dedicated leased line from your data center or network to AWS.",
"directory service": "Tie together other apps that need a Microsoft Active Directory to control them.",
"workspaces": "Gives you a standard windows desktop that you're remotely controlling.",
"service catalog": "Give other AWS users in your group access to preset apps you've built so they don't have to read guides like this.",
"storage gateway": "Stop buying more storage to keep Word Docs on. Make automating getting files into S3 from your corporate network easier.",
"data pipeline": "Extract, Transform and Load data from elsewhere in AWS. Schedule when it happens and get alerts when they fail.",
"e.m.r.": "Iterate over massive text files of raw data that you're keeping in S3.",
"glacier": "Make backups of your backups that you keep on S3. Also, beware the cost of getting data back out in a hurry. For long term archiving.",
"kinesis": "Ingest lots of data very quickly, for things like analytics or people retweeting Kanye, that you then later use other AWS services to analyze.",
"red shift": "Store a whole bunch of analytics data, do some processing, and dump it out.",
"machine learning": "Predict future behavior from existing data for problems like fraud detection or people that bought x also bought y.",
"s.w.f.": "Build a service of deciders and workers on top of EC2 to accomplish a set task. Unlike SQS, logic is set up inside the service to determine how and what should happen.",
"snowball": "Get a bunch of hard drives you can attach to your network to make getting large amounts into and out of AWS",
"cloud formation": "Set up a bunch of connected AWS services in one go.",
"cloud trail": "Log who is doing what in your AWS stack ",
"cloud watch": "Get alerts about AWS services messing up or disconnecting.",
"config": "Keep from going insane if you have a large AWS setup and changes are happening that you want to track.",
"ops works": "Handle running your application with things like auto-scaling.",
"trusted advisor": "Find out where you're paying too much in your AWS setup.",
"inspector": "Scans your AWS setup to determine if you've setup it up in an insecure way",
"cloud computing": "refers to the on-demand delivery of IT resources and applications via the Internet with pay-as-you-go pricing.  Cloud Computing provides a simple way to access servers, storage, databases and a broad set of application services over the Internet. Cloud Computing providers such as Amazon Web Services own and maintain the network-connected hardware required for these application services, while you provision and use what you need via a web application or an API."
};
