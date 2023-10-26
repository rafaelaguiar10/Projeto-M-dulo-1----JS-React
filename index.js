function obterBlogs() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://gorest.co.in/public-api/posts', true);
    request.send();

    request.onload = function () {
        if (request.status === 200) {
            var body = JSON.parse(request.responseText);
            var blogsTag = document.getElementById('blogs');

            body.data.forEach(blog => { 
                let blogsItem = document.createElement('li'); 
                blogsItem.innerText = blog.title;
                
                let blogsItem2 = document.createElement('li');
                blogsItem2.innerText = blog.body;

                let blogsItem3 = document.createElement('li');
                blogsItem3.innerText = blog.user_id;

                blogsTag.appendChild(blogsItem)
                blogsTag.appendChild (blogsItem2)
                blogsTag.appendChild (blogsItem3)

            });
        }
    };
}