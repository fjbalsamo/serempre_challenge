import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

import { ProductEntity } from '../../products/entity'

@Entity({
    name: 'categories'
})
export class CategoryEntity {

    @PrimaryGeneratedColumn('increment', {
        name: 'categoryID',
        unsigned: true,
        comment: 'primary key'
    })
    id:number

    @Column({
        name: 'category_name',
        nullable: false,
        unique: false,
        comment: 'category name'
    })
    name:string

    @Column({
        name: 'category_description',
        nullable: false,
        unique: false,
        comment: 'category short description'
    })
    description:string

    @Column({
        name: 'category_picture',
        nullable: true,
        unique: false,
        comment: 'category picture',
        default: null
    })
    picture?:string

    @OneToMany(() => ProductEntity, product => product.category)
    products:ProductEntity[]

}
