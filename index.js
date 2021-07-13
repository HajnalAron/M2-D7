     /*
        JS Exercises
        EX11) Write a function to add a new link into the navbar
        EX12) Write a function to change the color of the main title
        EX13) Write a function to change the background of the jumbotron
        EX14) Write a function to remove all the links under "Elsewhere"
        EX15) Write a function to change the column size for heading in jumbotron
        EX16) Write a function to remove the "Search" magnifying glass icon
        EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
        EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
    */

        const newNavLink = function(){
            document.querySelector('nav').appendChild(document.createElement('a'))
        }

        const mainTitleColor = function(color){
            document.querySelector('main h3').style.color = color
        }

        const removeJumboBackground = function() {
            document.querySelector('.jumbotron').classList.remove('bg-dark')
        }

        const removeLinksFromElsewhere = function(){
            let target = document.querySelectorAll('div[class="p-4"] ol')[1]
            target.remove()
        }

        const changeHeadingSize = function(){
            let target = document.querySelector('div.jumbotron.p-4.p-md-5.text-white.rounded.bg-dark > div')
            target.classList.remove('col-md-6')
            target.classList.add('col-md-12')
        }

        const removeSearch = function(){
            document.querySelector("a.text-muted > svg").remove()
        }

        const trimParagraphs = function(){
            let target = document.querySelectorAll('div.blog-post > p:not(p.blog-post-meta)')
            for (let i = 0; i < target.length; i++){
                
            }            
        }

        const newBlogPost = function(){
            let target = document.querySelector('main > div > div')
            let blogPostTitle = document.createElement('h2')
            let blogPostBody = document.createElement('div')
            target.insertBefore(blogPostBody, target[1])
            target.insertBefore(blogPostTitle, target[1])
        }

        const removeLastPost = function(){
            let target = document.querySelectorAll('div.blog-post:not(p.blog-post-meta)')
            target[target.length-1].remove()
        }

        const authorAlert = function(event){
            alert(event.innerHTML)
        }

        const authorAlertAdd = function() {
            targets = document.querySelectorAll('p.blog-post-meta > a')
            for (let i = 0; i < targets.length; i++){ 
                targets[i].addEventListener("mouseover", authorAlert)
            }
        }
    