const AWS = require('aws-sdk');
const fs = require('fs')

fs.readFile('./img1.jpg', (err, data) => {
  if (err) throw err;

 //AWS.config.region = 'us-west-2';
  let s3bucket = new AWS.S3({params: {Bucket: 'awsintroreena'}});

  s3bucket.createBucket(() => {
    var params =
     {Key: 'img1.jpg', 
     Body: data,
     ACL: 'public-read-write'};

    s3bucket.upload(params, (err, data) => {
      if (err) console.log('Error uploading file ', err);
      else console.log("Successfully uploaded data to myBucket/myKey");
    });
  })
});