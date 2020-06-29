let obj = {
    data:{
        uuid: '5a9a47b3-910d-4fe0-9fb8-91afdd02ef76',
        APIpath: 'https://course-ec-api.hexschool.io/api/',
        products: [],
    },
    getData(){
        vm = this;
        url = `${this.data.APIpath}${this.data.uuid}/ec/products`;
        axios.get(url).then(function(res){
            vm.data.products = res.data.data;
            vm.render();
            console.log(res)
        }).catch(function(res){
            console.log(res);
        })
    },
    render(){
        const productsBox = document.getElementById('products');
        let products = this.data.products;
        let string = '';
        products.forEach((product)=>{
            string += `<div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <div class="productImg" style="background-image:url(${product.imageUrl})"></div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.content}</p>
                </div>
                <div class="card-body">
                    <span class="h2 text-danger mr-2">NT$${product.price}</span>
                    <span class="h5 org text-black-50">NT$${product.origin_price}</span>
                </div>
            </div>
        </div>
            `
        });
        productsBox.innerHTML = string;
    }
}
obj.getData();