document.addEventListener('DOMContentLoaded', function () {
    //event
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');
    let events = document.querySelectorAll('.event')
    let i = 0;
    if (document.documentElement.clientWidth < 769) {
        prevBtn.onclick = function () {
            events[i].style.display = 'none';
            i = i - 1;
            if (i < 0) {
                i = events.length - 1;
            }
            events[i].style.display = 'block';
        }
        nextBtn.onclick = function () {
            events[i].style.display = 'none';
            i = i + 1;
            if (i >= events.length) {
                i = 0;
            }
            events[i].style.display = 'block';
        }
    }
    if (document.documentElement.clientWidth >= 769) {

        prevBtn.onclick = function () {
            events[i].style.display = 'none';
            i = i - 1;
            if (i < 0) {
                i = events.length - 1;
            }
            events[i].style.display = 'grid';
        }
        nextBtn.onclick = function () {
            events[i].style.display = 'none';
            i = i + 1;
            if (i >= events.length) {
                i = 0;
            }
            events[i].style.display = 'grid';
        }
    }
    //how768
    let k = 1;
    for (let li of document.querySelectorAll('.how__carousel li')) {
        li.style.position = 'relative';
        k++;
    }

    let widthHow = 200;
    let countHow = 3;
    let ulHow = document.querySelector('.how__carousel ul');
    let ulHowItem = document.querySelectorAll('.how__carousel li');
    let last = document.getElementById('how__item__last');

    let positionHow = 0;

    document.querySelector('.how__prev').onclick = function () {
        positionHow += widthHow * countHow;
        positionHow = Math.min(positionHow, 0)
        ulHow.style.marginLeft = positionHow + 'px';
    };

    document.querySelector('.how__next').onclick = function () {
        positionHow -= widthHow * countHow;
        positionHow = Math.max(positionHow, -widthHow * (ulHowItem.length - countHow));
        ulHow.style.marginLeft = positionHow + 'px';
    };
    //menuch
    if (document.documentElement.clientWidth >= 769) {
        let j = 1;
        for (let li of document.querySelectorAll('.menu__carousel li')) {
            li.style.position = 'relative';
            j++;
        }


        let width = 400;
        let count = 3;
        let ulMenu = document.querySelector('.menu__carousel ul');
        let ulMenuItem = document.querySelectorAll('.menu__carousel li');

        let position = 0;

        document.querySelector('.menuch__prev').onclick = function () {
            position += width * count;
            position = Math.min(position, 0)
            ulMenu.style.marginLeft = position + 'px';
        };

        document.querySelector('.menuch__next').onclick = function () {
            position -= width * count;
            position = Math.max(position, -width * (ulMenuItem.length - count));
            ulMenu.style.marginLeft = position + 'px';
        };
    }
    ;

    if (document.documentElement.clientWidth < 769) {
        let j = 1;
        for (let li of document.querySelectorAll('.menu__carousel li')) {
            li.style.position = 'relative';
            j++;
        }


        let width = 373;
        let count = 2;
        let ulMenu = document.querySelector('.menu__carousel ul');
        let ulMenuItem = document.querySelectorAll('.menu__carousel li');

        let position = 0;

        document.querySelector('.menuch__prev').onclick = function () {
            position += width * count;
            position = Math.min(position, 0)
            ulMenu.style.marginLeft = position + 'px';
        };

        document.querySelector('.menuch__next').onclick = function () {
            position -= width * count;
            position = Math.max(position, -width * (ulMenuItem.length - count));
            ulMenu.style.marginLeft = position + 'px';
        };
    }
    if (document.documentElement.clientWidth < 321) {
        let j = 1;
        for (let li of document.querySelectorAll('.menu__carousel li')) {
            li.style.position = 'relative';
            j++;
        }


        let width = 300;
        let count = 1;
        let ulMenu = document.querySelector('.menu__carousel ul');
        let ulMenuItem = document.querySelectorAll('.menu__carousel li');

        let position = 0;
        document.querySelector('.menuch__prev').onclick = function () {
            position += width * count;
            position = Math.min(position, 0)
            ulMenu.style.marginLeft = position + 'px';
        };

        document.querySelector('.menuch__next').onclick = function () {
            position -= width * count;
            position = Math.max(position, -width * (ulMenuItem.length - count));
            ulMenu.style.marginLeft = position + 'px';

        };

    }
//slide
    //  (function() {
    //  $(function() {
    //   return $('.slide').on('click', function() {
    //  if ($(this).hasClass('on')) {
    // return $(this).removeClass('on');
    // } else {
    // return $(this).addClass('on');
    // }
    // });
    // });

    // }).call(this);

    (function () {
        document.addEventListener('DOMContentLoaded', function () {
            return document.querySelector('.slide').addEventListener(
                'click', function () {
                    if (document.querySelector('.slide').classList.contains('on')) {
                        return this.classList.remove('on');
                    } else {
                        return this.classList.add('on')
                    }
                }
            )
        });
    }).call(this)


}, false);