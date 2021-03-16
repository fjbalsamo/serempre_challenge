import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { CategoryEntity } from '../../categories/entity';
import { ProviderEntity } from '../../providers/entity';

@Entity({
    name: 'products'
})
export class ProductEntity {

    @PrimaryGeneratedColumn('increment', {
        name: 'productID',
        unsigned: true,
        comment: 'primary key'
    })
    id:number

    @Column({
        name: 'product_name',
        nullable: false,
        unique: false,
        comment: 'product name',
        type: String
    })
    name:string

    @Column({
        name: 'product_quantityPerUnit',
        nullable: false,
        unique: false,
        comment: 'quantity per unit description',
        type: String,
    })
    quantityPerUnit:string

    @Column({
        name: 'product_unitPrice',
        nullable: false,
        unique: false,
        comment: 'product unit price',
        default: null,
        type: 'float'
    })
    unitPrice:number

    @Column({
        name: 'product_unitsInStock',
        nullable: false,
        unique: false,
        comment: 'stock available',
        type: Number
    })
    unitsInStock:number
    
    @Column({
        name: 'product_unitsOnOrder',
        nullable: true,
        unique: false,
        comment: 'pending units orders',
        type: Number,
        default: 0
    })
    unitsOnOrder:number
    
    @Column({
        name: 'product_reorderLevel',
        nullable: true,
        unique: false,
        comment: 'level of pending units orders??',
        type: Number,
        default: 0
    })
    reorderLevel:number
    
    @Column({
        name: 'product_discontinued',
        nullable: true,
        unique: false,
        comment: 'this product is discontinued?',
        type: String,
        default: "0"
    })
    discontinued:number

    @ManyToOne(() => CategoryEntity, category => category.products, {
        createForeignKeyConstraints: false
    })
    category:CategoryEntity

    @ManyToOne(() => ProviderEntity, provider => provider.products, {
        createForeignKeyConstraints: false
    })
    provider:ProviderEntity

}
