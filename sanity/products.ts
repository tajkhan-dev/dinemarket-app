
export const product ={
    name:'product',
    type:'document',
    title:'dinemarket',
    fields:[
        {
            name:'name',
            type:'string',
            title:'product name'
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name'
            }


        },

        {
            name:'price',
            type: 'number',
            title:'product price'
        },
        {
            name:'image',
            type:'image',
            title:'product image'
        }
    ]
}