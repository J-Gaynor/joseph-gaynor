    /**
     * Init typed.js
     */
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
        // $('#person-1-name').text('日本を探求していた時のことを綴ったWordPressのブログです。')
        // $('#person-1-role').text('日本を探求していた時のことを綴ったWordPressのブログです。')
        // $('#person-1-quote').text('日本を探求していた時のことを綴ったWordPressのブログです。')

        // $('#project-1-category').text('ウェブアプリ');
        // $('#project-1-date').text('2023年');
        // $('#project-2-category').text('ウェブアプリ');
        // $('#project-2-date').text('2024年');
        initializeTyped();
    }

    $('#english').click(function(){
        english();
    })
    $('#japanese').click(function(){
        japanese();
    })
})