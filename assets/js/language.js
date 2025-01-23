    let typed; // Declare a global variable to store the Typed instance

    function initializeTyped() {
        const selectTyped = document.querySelector('.typed');
        if (selectTyped) {
            let typed_strings = selectTyped.getAttribute('data-typed-items');
            typed_strings = typed_strings.split(',');

            // Destroy previous instance if it exists
            if (typed) {
                typed.destroy();
            }

            // Create a new Typed instance
            typed = new Typed('.typed', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        }
    }

$(document).ready(function(){
    function english(){
        $('#nav-home').text('Home');
        $('#nav-about').text('About');
        $('#nav-services').text('Services');
        $('#nav-portfolio').text('Portfolio');
        $('#nav-language').text('Language');
        $('#english').text('English');
        $('#japanese').text('Japanese');
        $("#typed").attr("data-typed-items", "Developer, Freelancer");
        $('#about-name').text('Name:');
        $('#about-profile').text('Profile:');
        $('#about-degree').text('Degree:');
        $('#about-profile-ans').text('Full Stack Developer');
        $('#about-degree-ans').text('Business Management');
        $('#skill').text('Skills');
        $('#about-me').text('About Me');
        $('#lead-1').text("Following my graduation from the University of Sheffield in 2022, I began learning basic coding skills via Harvard's various CS50 courses. After completing a number of these courses, I discovered my real interest was web development and undertook a web development bootcamp provided by IT Career Switch.");
        $('#lead-2').text("In this bootcamp, I explored the languages I had learned from CS50 in more detail, in particular JavaScript. I was introduced to various frameworks such as React and Redux which gave me a new perspective on how projects can be completed. As part of the course, I created a Gazetteer and Employee Database System website using a number of languages.");
        $('#lead-3').text("Currently, I am living in Japan and working on building this very portfolio. I want to explore the industry's most used languages and frameworks. While exploring Japan, I want to work on webpage translation projects with the desire to work in Japan in the near future.");
        $('#services-title').text('Services');
        $('#services-body').text('Want an idea of what I offer? Take a look!');
        $('#front-end-title').text('Front End Design');
        $('#front-end-body').text('Building fast, responsive, and visually engaging websites, ensuring a seamless user experience across all devices.');
        $('#full-stack-title').text('Full Stack Development');
        $('#full-stack-body').text('Developing and bringing together both user interface and user data to create complete systems.');
        $('#back-end-title').text('Back End Construction.');
        $('#back-end-body').text('Constructing server side functionality to leverage external APIs and build user systems.');
        $('#portfolio-title').text('Portfolio');
        $('#portfolio-body').text('Take a look at some of my projects.');
        $('#verb-conjugator-desc').text('A React based web application which challenges users to conjugate Japanese verbs into different forms. Features dynamic answer animations and styled with Bootstrap.');
        $('#john-wayne-desc').text('A modern website for a barber in Osaka. My first project using Tailwind and NextJS.');
        $('#blog-desc').text('A Wordpress blog about my time exploring Japan.');
        $('#ai-artist-desc').text('A full stack project that utilises AI to give an example on how artists can promote their projects prior to releasing and without having to say a word themselves.');
        $('#object-identifier-desc').text('A front end project utilising Google\'s Mediapipe to analyse images uploaded by the user and state the focal point of the image with a level of confience. Built with React.');
        $('.tech-stack').text('Tech Stack:');
        $('#wordpress-para-1').text('In my blog about my time in Japan, I utilised WordPress, a service I had no familiarity with whatsoever. Through self-teaching and some trial and error, I created a blog page that I am happy with. Though minimalistic in functionality, it captures the essence of what I wanted, which was a blog site where I can detail my travels across the country.');
        $('#wordpress-para-2').text('Currently, the blog is crafted entirely with vanilla WordPress (no plugins) and was made using WordPress.com rather than WordPress.org. As the blog grows, I will possibly revisit it and implement additional functionality that, as of now, hasn\'t occured to me.');
        $('#wordpress-para-3').text('This project highlights my desire and initiative to branch out from technology that I am used to in order to work on projects that may not be my area of expertise.');
        $('#john-wayne-para-1').text('This project is my first implementation of Next.js, React-Intl, and Tailwind CSS. It showcases a bilingual barber shop website designed for a Japanese company, combining Japanese web design principles with an English layout.');
        $('#john-wayne-para-2').text('The Barbershop project features internationalisation. Translations are stored in separate locale files. All site text is dynamically loaded using React-Intl.');
        $('#john-wayne-para-3').text('The site was designed to complement the company\'s existing Japanese website. The English version will be live, while the Japanese button links to their existing site rather than a translated version. Please view the live netlify demo to see the translation feature in action.');
        $('#verb-conjugator-para-1').text('Given that I study Japanese, it only makes sense to develop a project that can aid in my and my classmates learning. Therefore, when I realised the frequency at which we found ourselves switching between verb conjugations, I thought a website to practice doing just that would be beneficial for learning both coding and Japanese.');
        $('#verb-conjugator-para-2').text('The project makes use of Bootstrap CSS styling to create an intuitive layout for the user. React was chosen as the JS framework as I knew from the get go I\'d be doing a lot of dynamic (and conditional) rendering. While developing, I decided to implement the Wanakana package to improve UX by allowing real time conversion of English to Japanese if the user doesn\'t have a Japanese keyboard.');
        $('#verb-conjugator-para-3').text('I was pleased with the simplicity to use this project on both mobile and desktop devices.');
        $('#ai-artist-para-1').text('In an age where music snippets can shift public perception of an artist\'s career, this project sees AI utilise music snippets as to speak to users as if it was the artist themselves. With a customised Gemini prompt that tells the bot to imitate artist Lil Uzi Vert\'s social media vernacular, this bot does a great job matching the lingo to create a realistic interaction with the user. The output of the bot has been customised so that if a user asks for snippets from the artist, the bot can search through a JSON and return snippets that match the user\'s criteria. These snippets are extracted from the bot\'s response and transformed into a custom <AudioContainer /> component which allows the user to listen to the snippet.');
        $('#ai-artist-para-2').text('This project challenged me to go beyond simple API usage, and forced me to format my responses in a specific manner. Separating the response in order to feed details to my Audio Container element proved challenging, but I am extremely pleased with the results. This project looks and feels like a postmodern promotion piece.');
        $('#object-identifier-para-1').text('As ML and AI become ever more prevalent in consumer lifestyle, I wanted to make a project that utilised some of the features of existing machine learning frameworks. Given the relative lightweight of mediapipe as a JS import, I thought it would be great to use This framework to create my object identifier. Furthermore, I knew from my experience with Gemini how accessible the docs were for Google developer tools.');
        $('#object-identifier-para-2').text('Being entirely front end based, this project leverages Google\'s \'Efficient Det Lite 0\' model to identify the image uploaded by the user. This model was chosen due to its balance of accuracy and speed whilst having access to a large data pool for reference. Though basic in appearance, the project does use React to avoid needlessly reloading the page to render the results of passsing the image to Mediapipe\'s vision tasks model.');


        // $('#person-1-name').text('日本を探求していた時のことを綴ったWordPressのブログです。')
        // $('#person-1-role').text('日本を探求していた時のことを綴ったWordPressのブログです。')
        // $('#person-1-quote').text('日本を探求していた時のことを綴ったWordPressのブログです。')

        initializeTyped();
    }

    english();

    function japanese(){
        initializeTyped();

        $('#nav-home').text('ホーム');
        $('#nav-about').text('自己紹介');
        $('#nav-services').text('サービス');
        $('#nav-portfolio').text('ポートフォリオ');
        $('#nav-language').text('言語');
        $('#english').text('英語');
        $('#japanese').text('日本語');
        $("#typed").attr("data-typed-items", "開発者, フリーランサー");
        $('#about-name').text('名前：');
        $('#about-profile').text('プロフィール：');
        $('#about-degree').text('先行：');
        $('#about-profile-ans').text('フルスタック開発者');
        $('#about-degree-ans').text('ビジネス');
        $('#skill').text('能力');
        $('#about-me').text('自己紹介');
        $('#lead-1').text("2022年にシェフィールド大学を卒業した後、ハーバード大学のさまざまなCS50コースを通じて基本的なコーディングスキルを学び始めました。いくつかのコースを修了した後、自分の本当の関心がウェブ開発にあることに気づき、ITキャリアスイッチが提供するウェブ開発ブートキャンプに参加しました。");
        $('#lead-2').text(`このブートキャンプでは、CS50で学んだプログラミング言語をさらに詳しく探求し、特にJavaScriptについて深く学びました。また、ReactやReduxなどのさまざまなフレームワークにも触れ、プロジェクトの完成方法に対する新しい視点を得ることができました。コースの一環として、複数のプログラミング言語を使用して「ガゼッティア」と「従業員データベースシステム」のウェブサイトを作成しました。`);
        $('#lead-3').text(`現在、日本に住んでいて、このポートフォリオを構築する作業を進めています。業界で最も使用されている言語やフレームワークを探求したいと考えています。日本を探索しながら、ウェブページ翻訳プロジェクトに取り組みたいと考えており、近い将来、日本で働くことを目指しています。`);
        $('#services-title').text('サービス');
        $('#services-body').text('提供している内容が気になりますか？ご覧ください！');
        $('#front-end-title').text('フロントエンドデザイン');
        $('#front-end-body').text('高速でレスポンシブ、視覚的に魅力的なウェブサイトを構築し、すべてのデバイスでシームレスなユーザー体験を提供します。');
        $('#full-stack-title').text('フルスタック開発');
        $('#full-stack-body').text('ユーザーインターフェースとユーザーデータを統合し、完全なシステムを作成します。');
        $('#back-end-title').text('バックエンド構築');
        $('#back-end-body').text('サーバーサイド機能を構築し、外部APIを活用してユーザーシステムを構築します。');
        $('#portfolio-title').text('ポートフォリオ');
        $('#portfolio-body').text('プロジェクトを見せてください。');
        $('#verb-conjugator-desc').text('Reactをベースにしたウェブアプリケーションで、ユーザーが日本語の動詞を異なる形に活用する挑戦を提供します。動的な回答アニメーションを特徴とし、Bootstrapでスタイリングされています。');
        $('#john-wayne-desc').text('大阪の理容師のためのモダンなウェブサイトです。TailwindとNextJSを使った最初のプロジェクトです。');
        $('#blog-desc').text('日本を探求していた時のことを綴ったWordPressのブログです。');
        $('#ai-artist-desc').text('リリース前にアーティストが自身で言葉を発することなく、プロジェクトをプロモーションする方法の例を示すために、AIを活用したフルスタックプロジェクト。');
        $('#object-identifier-desc').text('ユーザーがアップロードした画像を解析し、画像の焦点を信頼度とともに示すために、GoogleのMediapipeを活用したフロントエンドプロジェクト。Reactを使用して構築されています。');
        $('.tech-stack').text('技術スタック:');
        $('#wordpress-para-1').text('日本での時間についてのブログでは、全く馴染みのなかったサービスであるWordPressを活用しました。独学と試行錯誤を通じて、自分が満足できるブログページを作成しました。機能性は最小限ですが、自分が求めていた本質、つまり日本中を旅しながら詳細を書き留められるブログサイトを実現できました。');
        $('#wordpress-para-2').text('現在、このブログはプラグインを使わず、完全にバニラのWordPressで作成されており、WordPress.orgではなくWordPress.comを使用して作られています。ブログが成長するにつれて、将来的には再訪して、今は思いついていない追加機能を実装する可能性があります。');
        $('#wordpress-para-3').text('このプロジェクトは、自分の得意分野ではない技術を使用してもプロジェクトに取り組むために、新しい分野に挑戦する意欲と自主性を示しています。');
        $('#john-wayne-para-1').text('このプロジェクトは、Next.js、React-Intl、Tailwind CSSを初めて実装したものです。日本の企業向けにデザインされたバイリンガルのバーバーショップのウェブサイトであり、日本のウェブデザインの原則を英語のレイアウトと組み合わせています。');
        $('#john-wayne-para-2').text('このバーバーショッププロジェクトでは、国際化（i18n）を特徴としています。翻訳は別々のロケールファイルに保存され、サイトの全テキストはReact-Intlを使用して動的に読み込まれます。');
        $('#john-wayne-para-3').text('このサイトは、企業の既存の日本語ウェブサイトを補完するように設計されました。英語版は公開され、日本語のボタンは翻訳版ではなく既存のサイトにリンクします。翻訳機能を実際に確認するには、Netlifyのライブデモをご覧ください。');
        $('#verb-conjugator-para-1').text('日本語を勉強している以上、自分やクラスメートの学習を助けるプロジェクトを開発するのは理にかなっています。そのため、動詞の活用を頻繁に切り替える必要があることに気付いたとき、練習用のウェブサイトを作れば、コーディングと日本語の両方を学ぶ上で有益だと思いました。');
        $('#verb-conjugator-para-2').text('このプロジェクトでは、Bootstrap CSSスタイリングを使用してユーザーにとって直感的なレイアウトを作成しています。Reactは、動的（かつ条件付き）のレンダリングを多く行うと最初から分かっていたため、JSフレームワークとして選びました。開発中に、ユーザーが日本語キーボードを持っていない場合でもリアルタイムで英語を日本語に変換できるようにするため、Wanakanaパッケージを実装することにしました。');
        $('#verb-conjugator-para-3').text('このプロジェクトがモバイルデバイスとデスクトップの両方で簡単に使用できることに満足しています。');
        $('#ai-artist-para-1').text('音楽のスニペットがアーティストのキャリアに対する世間の認識を変える時代において、このプロジェクトではAIが音楽のスニペットを活用して、まるでアーティスト自身がユーザーと話しているかのように対応します。Lil Uzi VertのSNS独特の表現を模倣するようにカスタマイズされたGeminiプロンプトを使用することで、このボットはその口調をうまく合わせ、ユーザーとリアルな対話を生み出します。また、ユーザーがアーティストのスニペットを求めた場合、このボットはJSONを検索してユーザーの条件に一致するスニペットを返すようにカスタマイズされています。これらのスニペットはボットの応答から抽出され、カスタムの<AudioContainer />コンポーネントに変換され、ユーザーがスニペットを再生できるようにしています。');
        $('#ai-artist-para-2').text('このプロジェクトでは、単純なAPIの使用を超えることが求められ、応答を特定の形式に整える必要がありました。応答を分割してAudio Container要素に詳細を渡すのは挑戦的でしたが、結果には非常に満足しています。このプロジェクトは、ポストモダンなプロモーション作品のような外観と感覚を持っています。');
        $('#object-identifier-para-1').text('機械学習やAIが消費者の生活にますます普及する中、既存の機械学習フレームワークの機能を活用したプロジェクトを作りたいと思いました。MediapipeがJSインポートとして比較的軽量であることを考え、このフレームワークを使ってオブジェクト識別ツールを作るのは素晴らしいアイデアだと思いました。また、Google開発者ツールのドキュメントが非常に使いやすいことはGeminiの経験から知っていました。');
        $('#object-identifier-para-2').text('このプロジェクトは完全にフロントエンドベースであり、Googleの「Efficient Det Lite 0」モデルを活用してユーザーがアップロードした画像を識別します。このモデルは、正確性と速度のバランスが取れており、大量のデータプールを参照できる点から選ばれました。見た目はシンプルですが、Reactを使用して画像をMediapipeのVision Tasksモデルに渡した結果をレンダリングする際にページを無駄にリロードしないようにしています。');

        // $('#person-1-name').text('日本を探求していた時のことを綴ったWordPressのブログです。')
        // $('#person-1-role').text('日本を探求していた時のことを綴ったWordPressのブログです。')
        // $('#person-1-quote').text('日本を探求していた時のことを綴ったWordPressのブログです。')
        initializeTyped();
    }

    $('#english').click(function(){
        english();
    })
    $('#japanese').click(function(){
        japanese();
    })
})