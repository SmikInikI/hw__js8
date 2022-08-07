let lang = document.querySelector('html');
lang.setAttribute('lang','en');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let title = document.createElement('title');
title.innerHTML = 'hw__js8';
document.head.appendChild(title);

let link1 = document.createElement('link');
link1.setAttribute('rel', 'preconnect');
link1.href = 'https://fonts.googleapis.com';
document.head.appendChild(link1);

let link2 = document.createElement('link');
link1.setAttribute('rel', 'stylesheet');
link1.href = 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap';
document.head.appendChild(link1);

let style = document.createElement('style');
style.innerHTML = `
                    * {
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        width: 1280px;
                        margin: 0 auto;
                    }
                    .header_title {
                        font-family: Arvo, serif;
                        font-size: 36px;
                        line-height: 48px;
                        color: #212121;
                        text-align: center;
                        padding-top: 100px;
                    }
                    .header_subtitle {
                        font-family: Open Sans, sans-serif;
                        font-size: 14px;
                        line-height: 26px;
                        text-align: center;
                        color: #9FA3A7;
                        padding-top: 10px;
                        margin-bottom: 55px;
                    }

                    .wrapper {
                        width: 800px;
                        height: 480px;
                        display: flex;
                        justify-content: center;
                        border: 1px solid #9FA3A7;
                        border-radius: 5px;
                        margin: 0 auto;
                    }
                    .block {
                        width: 50%;
                        text-align: center;
                    }
                    .main_pretitle {
                        font-family: Montserrat, sans-serif;
                        font-size: 12px;
                        letter-spacing: 2.4px;
                        color: #9FA3A7;
                        text-transform: uppercase;
                        padding-top: 81px;
                    }
                    .main_title {
                        font-family: Arvo, serif;
                        font-size: 36px;
                        line-height: 46px;
                        color: #212121;
                        padding-top: 19px;
                        padding-bottom: 25px;
                        width: 210px;
                        margin: 0 auto;
                    }
                    .main_subtitle {
                        font-family: Open Sans, sans-serif;
                        font-size: 12px;
                        line-height: 22px;
                        color: #9FA3A7;
                        padding-bottom: 52px;
                        width: 210px;
                        margin: 0 auto;
                    }
                    .main_link {
                        text-decoration: none;
                        font-family: Montserrat, sans-serif;
                        font-weight: bold;
                        font-size: 12px;
                        letter-spacing: 2.4px;
                        color: #212121;
                        text-transform: uppercase;
                        padding: 15px 22px;
                        border: 3px solid #FFC80A;
                        border-radius: 25px;
                        margin-bottom: 75px;
                    }
                    .block:hover {
                        background-color:#8F75BE;
                    }
                    .block:hover .main_pretitle {
                        color:#FFC80A;
                    }
                    .block:hover .main_title,
                    .block:hover .main_subtitle,
                    .block:hover .main_link {
                        color: #ffffff
                    }`;
document.head.appendChild(style);

let h1 = document.createElement('h1');
h1.classList.add('header_title');
h1.innerHTML = 'Choose your option';
document.body.appendChild(h1);

let p1 = document.createElement('p');
p1.classList.add('header_subtitle');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p1);

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

let block1 = document.createElement('div');
block1.classList.add('block');
wrapper.appendChild(block1);

let block2 = document.createElement('div');
block2.classList.add('block');
wrapper.appendChild(block2);

let main_pretitle1 = document.createElement('p');
main_pretitle1.classList.add('main_pretitle');
main_pretitle1.innerHTML = 'Freelancer';
block1.appendChild(main_pretitle1);

let main_pretitle2 = document.createElement('p');
main_pretitle2.classList.add('main_pretitle');
main_pretitle2.innerHTML = 'Studio';
block2.appendChild(main_pretitle2);

let main_title1 = document.createElement('h2');
main_title1.classList.add('main_title');
main_title1.innerHTML = 'Initially designed to';
block1.appendChild(main_title1);

let main_title2 = main_title1.cloneNode('h2');
block2.appendChild(main_title2);

let main_subtitle1 = document.createElement('p');
main_subtitle1.classList.add('main_subtitle');
main_subtitle1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
block1.appendChild(main_subtitle1);

let main_subtitle2 = main_subtitle1.cloneNode('p');
block2.appendChild(main_subtitle2);

let main_link1 = document.createElement('a');
main_link1.href = '#';
main_link1.classList.add('main_link');
main_link1.innerHTML = 'Start here';
block1.appendChild(main_link1);

let main_link2 = main_link1.cloneNode(true);
block2.appendChild(main_link2); 
