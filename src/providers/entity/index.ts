import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

import { ProductEntity } from '../../products/entity'

@Entity({
    name: 'suppliers'
})
export class ProviderEntity {

    @PrimaryGeneratedColumn('increment', {
        name: 'supplierID',
        unsigned: true,
        comment: 'primary key'
    })
    id:number

    @Column({
        name: 'supplier_companyName',
        nullable: false,
        unique: false,
        comment: 'category name'
    })
    companyName:string

    @Column({
        name: 'supplier_contactName',
        nullable: false,
        unique: false,
        comment: 'supplier contact name'
    })
    contactName:string

    @Column({
        name: 'supplier_contactTitle',
        nullable: false,
        unique: false,
        comment: 'supplier contact title'
    })
    contactTitle:string

    @Column({
        name: 'supplier_address',
        nullable: false,
        unique: false,
        comment: 'supplier address'
    })
    address:string

    @Column({
        name: 'supplier_city',
        nullable: false,
        unique: false,
        comment: 'supplier city'
    })
    city:string
    
    @Column({
        name: 'supplier_postalCode',
        nullable: false,
        unique: false,
        comment: 'supplier postal code'
    })
    postalCode:string
    
    @Column({
        name: 'supplier_region',
        nullable: false,
        unique: false,
        comment: 'supplier region'
    })
    region:string
    
    @Column({
        name: 'supplier_country',
        nullable: false,
        unique: false,
        comment: 'supplier country'
    })
    country:string

    @Column({
        name: 'supplier_phone',
        nullable: false,
        unique: false,
        comment: 'supplier phone'
    })
    phone:string

    @Column({
        name: 'supplier_fax',
        nullable: true,
        unique: false,
        comment: 'supplier fax',
        default: null
    })
    fax?:string
    
    @Column({
        name: 'supplier_homePage',
        nullable: true,
        unique: false,
        comment: 'supplier web site',
        default: null
    })
    homePage?:string

    @OneToMany(() => ProductEntity, product => product.provider)
    products:ProductEntity[]

}
