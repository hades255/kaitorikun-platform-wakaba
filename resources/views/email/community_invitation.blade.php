<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            background-color: #4caf50;
            color: #ffffff;
            padding: 10px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }

        .content {
            padding: 20px;
            text-align: left;
            color: #333333;
        }

        .content h2 {
            color: #4caf50;
        }

        .token {
            font-size: 18px;
            font-weight: bold;
            color: #4caf50;
            background-color: #e8f5e9;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            margin: 20px 0;
        }

        .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #777777;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            background-color: #4caf50;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }

        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="header">
            <h1>ご招待します！</h1>
        </div>
        <div class="content">
            <h2>コミュニティに参加しましょう</h2>
            <p>{{$data['name']}} 様,</p>
            <p>
                活気あるコミュニティの一員になられることを大変嬉しく思います。同じ考えを持つ人々とつながり、記事を投稿してあなたの洞察を共有しましょう。
            </p>
            <p>参加するには、次の招待トークンを使用するだけです:</p>
            <div class="token">{{$data['token']}}</div>

            <p>
                私たちはすべての声が重要であると信じており、あなたの貢献がコミュニティをどのように豊かにするかを見るのを楽しみにしています。
            </p>
            <a href="{{$data['url']}}" class="button">今すぐ参加しましょう</a>
        </div>
        <div class="footer">
            <p>
                ご質問がございましたら、お気軽に
                <a href="mailto:{{$data['contact']}}">お問い合わせ</a>ください。
            </p>
            <p>
                最新情報については、<a href="{{$data['social']}}">ソーシャル メディア</a>
                でフォローしてください。
            </p>
        </div>
    </div>
</body>

</html>