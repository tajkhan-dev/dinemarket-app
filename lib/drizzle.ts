import {pgTable,varchar,integer,serial}from 'drizzle-orm/pg-core'
import {drizzle ,} from 'drizzle-orm/vercel-postgres'
import { sql } from '@vercel/postgres'

export const cartTable=pgTable("cart",{
    id:serial("id").primaryKey(),
     uid:varchar("uid",{length:255}).notNull(),
    quantity:integer("quantity").notNull(),
    imageurl:varchar("imageurl").notNull(),
    product_name:varchar("product_name",{length:255}).notNull(),
    product_price:integer("product_price").notNull(),
    tags:varchar("tags",{length:20}).notNull()


})

export  const db=drizzle(sql)


// // create table cart(
// id serial primary key,
// userId varchar(255) not null,
// quantity int not null,
// imageurl varchar not null,
// product_name varchar(255) not null,
// product_price int not null,
// tags varchar(20) not null);