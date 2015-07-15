###*
# Created by Ihor on 15.07.2015.
###

define ->
    require [ app.path + 'Collections/Product' ], ->
        App = blocks.Application()
        App.View 'Products',
            options: url: 'view/blog.tpl'
            newProduct: app.Models.Product
            cnt: 1
            head: [
                { name: 'Name' }
                { name: 'Version' }
                { name: 'Link' }
            ]
            products: app.Collections.Product([
                {
                    name: 'HTML'
                    version: '5.0'
                    link: 'w3.org'
                }
                {
                    name: 'CSS'
                    version: '3.0'
                    link: 'w3.org'
                }
                {
                    name: 'JavaScript'
                    version: '6.0'
                    link: 'w3.org'
                }
            ])
            click: ->
                @cnt++
                @products.add
                    name: 'Element ' + @cnt
                    version: '5.0'
                    link: 'w3.org'

                ###this.products.addMany([{ name: 'HTML'+this.cnt, version:"5.0", link: "w3.org" }, { name: 'CSS'+this.cnt, version:"3.0", link: "w3.org" }, { name: 'JavaScript'+this.cnt, version:"6.0", link: "w3.org" }]);###

                return
        return
    true