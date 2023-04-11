document.querySelector('body').addEventListener('copy', (event) => {
    new Vue({
        data: function () {
            this.$notify({
                title: "复制成功啦~ ",
                message: "反正也没什么 拿去随便用",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "success",
                duration: 2000
            });
        }
    }) 
});

document.onkeydown = function () {
    // f12
    if (window.event && window.event.keyCode == 123) {
        new Vue({
            data: function () {
                this.$notify({
                    title: "你已被发现😜",
                    message: "小伙子，扒源记住要遵循GPL协议！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "warning",
                    duration: 5000
                });
            }
        })
    }
}