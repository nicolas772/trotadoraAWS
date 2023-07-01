import json
import boto3

def lambda_handler(event, context):  #required
   value = event['body-json']
   sqs = boto3.client('sqs')  #client is required to interact with 
   sqs.send_message(
       QueueUrl="https://sqs.us-east-1.amazonaws.com/370060650944/fromLambdaQueue",
       MessageBody=json.dumps(value)
   )
   
   return {
        'statusCode': 200,
        'body': json.dumps(value)
    }