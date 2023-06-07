
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
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    {title: "Female", value: "Female"},
                    {title: "Male", value: "Male"},
                    {title: "Kids", value: "Kids"}
                ],
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'string',
            options: {
                list: [
                    {title: "Sweater", value: "Sweater"},
                    {title: "Dress", value: "Dress"},
                    {title: "T Shirts", value: "T Shirts"},
                    {title: "Pants", value: "Pants"},
                    {title: "Jackets", value: "Jackets"}
                ],
            },
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