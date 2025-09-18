import json
import os
from typing import Dict, Any
from datetime import datetime
import urllib.request
import urllib.parse

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправка заявки на миграционные услуги в Telegram бот
    Args: event - dict with httpMethod, body, headers
          context - object with attributes: request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Get environment variables
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Telegram не настроен'})
        }
    
    # Parse request body
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    email = body_data.get('email', '')
    message = body_data.get('message', '')
    service_name = body_data.get('serviceName', '')
    service_price = body_data.get('servicePrice', '')
    website = body_data.get('website', 'migration-law.ru')
    
    # Format message
    telegram_message = f"""🔥 НОВАЯ ЗАЯВКА С САЙТА {website}

📋 Услуга: {service_name}
💰 Стоимость: {service_price}

👤 Клиент:
• Имя: {name}
• Телефон: {phone}
• Email: {email if email else 'не указан'}

💬 Сообщение:
{message if message else 'без дополнительной информации'}

📅 Время заявки: {datetime.now().strftime('%d.%m.%Y %H:%M')}
🌐 Сайт: {website}"""
    
    # Send to Telegram
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = {
        'chat_id': chat_id,
        'text': telegram_message,
        'parse_mode': 'HTML'
    }
    
    # Encode data for POST request
    post_data = urllib.parse.urlencode(data).encode('utf-8')
    
    try:
        # Create request
        req = urllib.request.Request(url, data=post_data, method='POST')
        req.add_header('Content-Type', 'application/x-www-form-urlencoded')
        
        # Send request
        with urllib.request.urlopen(req) as response:
            response_data = response.read().decode('utf-8')
            telegram_response = json.loads(response_data)
            
            if not telegram_response.get('ok'):
                return {
                    'statusCode': 500,
                    'headers': {'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Ошибка отправки в Telegram'})
                }
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Ошибка: {str(e)}'})
        }