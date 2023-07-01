import json
import boto3

def lambda_handler(event, context):
    message = event['Records'][0]['body']
    data = json.loads(message)
    value = float(data['value'])
    
    inclination = value * 2
    velocity = value / 2
    
    dicc_export = {
        "value": str(value),
        "inclination": str(inclination),
        "velocity": str(velocity)
    }
    
    sqs = boto3.client('sqs')
    
    sqs.send_message(
        QueueUrl="https://sqs.us-east-1.amazonaws.com/370060650944/queue2",
        MessageBody=json.dumps(dicc_export)
    )
    sqs.send_message(
        QueueUrl="https://sqs.us-east-1.amazonaws.com/370060650944/queue3",
        MessageBody=json.dumps(dicc_export)
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps(dicc_export)
    }
