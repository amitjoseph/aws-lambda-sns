import boto3
def send(number):

    try:
        message=""
        sns = boto3.client('sns', region_name='ap-southeast-2')
        print("=> Sending sms ")
        sns.set_sms_attributes(attributes={'DefaultSMSType': 'Transactional'})
        sns.set_sms_attributes(attributes={'DefaultSenderID': 'Enter_ID_Here'})
        if len(number)>10:
            response=sns.publish(PhoneNumber=number
                ,Message=message
                ,Subject="")
            print(response)
            
    except Exception as e:
        print(e)
       

def lambda_handler(event, context):
  # Number should be with country code
	send("+91900000000")
