document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    let skeletonLoader = document.getElementById('skeleton-loader');
    let dataList = document.getElementById('data-list');

    skeletonLoader.innerHTML = createSkeletonHtml(10)

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(responce => responce.json())
        .then((data) => {
            skeletonLoader.style.display = 'none';
            dataList.innerHTML = createDataHtml(data);
        })
        .catch(err => err);
}

function createSkeletonHtml(count) {
    let skeletonHTML = '';
    for (i = 0; i < count; i++) {
        skeletonHTML += '<div class="skeleton"></div>'
    }
    return skeletonHTML
}

function createDataHtml(data) {
    let dataHtml = ''
    data.forEach((item) => {
        dataHtml += `<li><strong>Title:</strong> ${item.title}</li>
        </br>
        <p><strong>Body:</strong> ${item.body}</p>`
    })

    return dataHtml
}