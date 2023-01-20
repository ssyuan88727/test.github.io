addEventListener('load', function(){
    const content = document.getElementById('content');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const addBtn = document.getElementById('addBtn');
    const deleteBtn = document.getElementById('deleteBtn');
    const list = document.getElementById('list');

    const listContent = [];

    // 類別寫法
    class RenderFeature{
        render(){
            // 渲染頁面list
            let htmlStr = '';
            // forEach自動抓取陣列中所有內容
            listContent.forEach(function (item){
                console.log('item: ', item);
                htmlStr += `
                <div class="item" id="list">
                    <div>
                        <p>內容: ${item.content}</p>
                        <p>時間: ${item.date}  ${item.time}</p>
                    </div><hr>
                </div>
                `;
            });
            list.innerHTML = htmlStr;
        }
    }    
    const r1 = new RenderFeature();

    // function寫法
    // function render(){
    //     // 渲染頁面list
    //     let htmlStr = '';
    //     // forEach自動抓取陣列中所有內容
    //     listContent.forEach(function (item){
    //         console.log('item: ', item);
    //         htmlStr += `
    //         <div class="item" id="list">
    //             <div>
    //                 <p>內容: ${item.content}</p>
    //                 <p>時間: ${item.date}  ${item.time}</p>
    //             </div><hr>
    //         </div>
    //         `;
    //     });
    //     list.innerHTML = htmlStr;
    // }

    addBtn.addEventListener('click', function(){
        console.log(content.value);
        console.log(date.value);
        console.log(time.value);

        // 陣列裡新增項目
            // push => 從後面新增
            // unshift => 從前面新增
        listContent.unshift({
            content: content.value,
            date: date.value,
            time: time.value,
        });
        r1.render();        
    })

    deleteBtn.addEventListener('click', function(){
        // 刪除陣列裡的項目
            // pop => 從後面刪除
            // shift => 從前面刪除
        listContent.pop();
        r1.render(); 
    })
})