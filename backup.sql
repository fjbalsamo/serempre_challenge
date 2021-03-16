--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2 (Debian 13.2-1.pgdg100+1)
-- Dumped by pg_dump version 13.2 (Debian 13.2-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    "categoryID" integer NOT NULL,
    category_name character varying NOT NULL,
    category_description character varying NOT NULL,
    category_picture character varying
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: COLUMN categories."categoryID"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.categories."categoryID" IS 'primary key';


--
-- Name: COLUMN categories.category_name; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.categories.category_name IS 'category name';


--
-- Name: COLUMN categories.category_description; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.categories.category_description IS 'category short description';


--
-- Name: COLUMN categories.category_picture; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.categories.category_picture IS 'category picture';


--
-- Name: categories_categoryID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."categories_categoryID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."categories_categoryID_seq" OWNER TO postgres;

--
-- Name: categories_categoryID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."categories_categoryID_seq" OWNED BY public.categories."categoryID";


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    "productID" integer NOT NULL,
    product_name character varying NOT NULL,
    "product_quantityPerUnit" character varying NOT NULL,
    "product_unitPrice" double precision NOT NULL,
    "product_unitsInStock" integer NOT NULL,
    "product_unitsOnOrder" integer DEFAULT 0,
    "product_reorderLevel" integer DEFAULT 0,
    product_discontinued character varying DEFAULT '0'::character varying,
    "categoryId" integer,
    "providerId" integer
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: COLUMN products."productID"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.products."productID" IS 'primary key';


--
-- Name: COLUMN products.product_name; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.products.product_name IS 'product name';


--
-- Name: COLUMN products."product_quantityPerUnit"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.products."product_quantityPerUnit" IS 'quantity per unit description';


--
-- Name: COLUMN products."product_unitPrice"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.products."product_unitPrice" IS 'product unit price';


--
-- Name: COLUMN products."product_unitsInStock"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.products."product_unitsInStock" IS 'stock available';


--
-- Name: COLUMN products."product_unitsOnOrder"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.products."product_unitsOnOrder" IS 'pending units orders';


--
-- Name: COLUMN products."product_reorderLevel"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.products."product_reorderLevel" IS 'level of pending units orders??';


--
-- Name: COLUMN products.product_discontinued; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.products.product_discontinued IS 'this product is discontinued?';


--
-- Name: COLUMN products."categoryId"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.products."categoryId" IS 'primary key';


--
-- Name: COLUMN products."providerId"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.products."providerId" IS 'primary key';


--
-- Name: products_productID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."products_productID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."products_productID_seq" OWNER TO postgres;

--
-- Name: products_productID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."products_productID_seq" OWNED BY public.products."productID";


--
-- Name: suppliers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.suppliers (
    "supplierID" integer NOT NULL,
    "supplier_companyName" character varying NOT NULL,
    "supplier_contactName" character varying NOT NULL,
    "supplier_contactTitle" character varying NOT NULL,
    supplier_address character varying NOT NULL,
    supplier_city character varying NOT NULL,
    "supplier_postalCode" character varying NOT NULL,
    supplier_region character varying NOT NULL,
    supplier_country character varying NOT NULL,
    supplier_phone character varying NOT NULL,
    supplier_fax character varying,
    "supplier_homePage" character varying
);


ALTER TABLE public.suppliers OWNER TO postgres;

--
-- Name: COLUMN suppliers."supplierID"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers."supplierID" IS 'primary key';


--
-- Name: COLUMN suppliers."supplier_companyName"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers."supplier_companyName" IS 'category name';


--
-- Name: COLUMN suppliers."supplier_contactName"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers."supplier_contactName" IS 'supplier contact name';


--
-- Name: COLUMN suppliers."supplier_contactTitle"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers."supplier_contactTitle" IS 'supplier contact title';


--
-- Name: COLUMN suppliers.supplier_address; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers.supplier_address IS 'supplier address';


--
-- Name: COLUMN suppliers.supplier_city; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers.supplier_city IS 'supplier city';


--
-- Name: COLUMN suppliers."supplier_postalCode"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers."supplier_postalCode" IS 'supplier postal code';


--
-- Name: COLUMN suppliers.supplier_region; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers.supplier_region IS 'supplier region';


--
-- Name: COLUMN suppliers.supplier_country; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers.supplier_country IS 'supplier country';


--
-- Name: COLUMN suppliers.supplier_phone; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers.supplier_phone IS 'supplier phone';


--
-- Name: COLUMN suppliers.supplier_fax; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers.supplier_fax IS 'supplier fax';


--
-- Name: COLUMN suppliers."supplier_homePage"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.suppliers."supplier_homePage" IS 'supplier web site';


--
-- Name: suppliers_supplierID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."suppliers_supplierID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."suppliers_supplierID_seq" OWNER TO postgres;

--
-- Name: suppliers_supplierID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."suppliers_supplierID_seq" OWNED BY public.suppliers."supplierID";


--
-- Name: categories categoryID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN "categoryID" SET DEFAULT nextval('public."categories_categoryID_seq"'::regclass);


--
-- Name: products productID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN "productID" SET DEFAULT nextval('public."products_productID_seq"'::regclass);


--
-- Name: suppliers supplierID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suppliers ALTER COLUMN "supplierID" SET DEFAULT nextval('public."suppliers_supplierID_seq"'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories ("categoryID", category_name, category_description, category_picture) FROM stdin;
2	Condiments	Sweet and savory sauces, relishes, spreads, and seasonings	\N
3	Confections	Desserts, candies, and sweet breads	\N
4	Dairy Products	Cheeses	\N
5	Grains/Cereals	Breads, crackers, pasta, and cereal	\N
6	Meat/Poultry	Prepared meats	\N
7	Produce	Dried fruit and bean curd	\N
8	Seafood	Seaweed and fish	\N
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products ("productID", product_name, "product_quantityPerUnit", "product_unitPrice", "product_unitsInStock", "product_unitsOnOrder", "product_reorderLevel", product_discontinued, "categoryId", "providerId") FROM stdin;
1	Chai	10 boxes x 20 bags	18	39	0	10	0	1	1
2	Chang	24 - 12 oz bottles	19	17	40	25	0	1	1
3	Aniseed Syrup	12 - 550 ml bottles	10	13	70	25	0	2	1
4	Chef Anton's Cajun Seasoning	48 - 6 oz jars	22	53	0	0	0	2	2
5	Chef Anton's Gumbo Mix	36 boxes	21.35	0	0	0	1	2	2
6	Grandma's Boysenberry Spread	12 - 8 oz jars	25	120	0	25	0	2	3
7	Uncle Bob's Organic Dried Pears	12 - 1 lb pkgs.	30	15	0	10	0	7	3
8	Northwoods Cranberry Sauce	12 - 12 oz jars	40	6	0	0	0	2	3
9	Mishi Kobe Niku	18 - 500 g pkgs.	97	29	0	0	1	6	4
10	Ikura	12 - 200 ml jars	31	31	0	0	0	8	4
11	Queso Cabrales	1 kg pkg.	21	22	30	30	0	4	5
12	Queso Manchego La Pastora	10 - 500 g pkgs.	38	86	0	0	0	4	5
13	Konbu	2 kg box	6	24	0	5	0	8	6
14	Tofu	40 - 100 g pkgs.	23.25	35	0	0	0	7	6
15	Genen Shouyu	24 - 250 ml bottles	15.5	39	0	5	0	2	6
16	Pavlova	32 - 500 g boxes	17.45	29	0	10	0	3	7
17	Alice Mutton	20 - 1 kg tins	39	0	0	0	1	6	7
18	Carnarvon Tigers	16 kg pkg.	62.5	42	0	0	0	8	7
19	Teatime Chocolate Biscuits	10 boxes x 12 pieces	9.2	25	0	5	0	3	8
20	Sir Rodney's Marmalade	30 gift boxes	81	40	0	0	0	3	8
21	Sir Rodney's Scones	24 pkgs. x 4 pieces	10	3	40	5	0	3	8
22	Gustaf's Knäckebröd	24 - 500 g pkgs.	21	104	0	25	0	5	9
23	Tunnbröd	12 - 250 g pkgs.	9	61	0	25	0	5	9
24	Guaraná Fantástica	12 - 355 ml cans	4.5	20	0	0	1	1	10
25	NuNuCa Nuß-Nougat-Creme	20 - 450 g glasses	14	76	0	30	0	3	11
26	Gumbär Gummibärchen	100 - 250 g bags	31.23	15	0	0	0	3	11
27	Schoggi Schokolade	100 - 100 g pieces	43.9	49	0	30	0	3	11
28	Rössle Sauerkraut	25 - 825 g cans	45.6	26	0	0	1	7	12
29	Thüringer Rostbratwurst	50 bags x 30 sausgs.	123.79	0	0	0	1	6	12
30	Nord-Ost Matjeshering	10 - 200 g glasses	25.89	10	0	15	0	8	13
31	Gorgonzola Telino	12 - 100 g pkgs	12.5	0	70	20	0	4	14
32	Mascarpone Fabioli	24 - 200 g pkgs.	32	9	40	25	0	4	14
33	Geitost	500 g	2.5	112	0	20	0	4	15
34	Sasquatch Ale	24 - 12 oz bottles	14	111	0	15	0	1	16
35	Steeleye Stout	24 - 12 oz bottles	18	20	0	15	0	1	16
36	Inlagd Sill	24 - 250 g  jars	19	112	0	20	0	8	17
37	Gravad lax	12 - 500 g pkgs.	26	11	50	25	0	8	17
38	Côte de Blaye	12 - 75 cl bottles	263.5	17	0	15	0	1	18
39	Chartreuse verte	750 cc per bottle	18	69	0	5	0	1	18
40	Boston Crab Meat	24 - 4 oz tins	18.4	123	0	30	0	8	19
41	Jack's New England Clam Chowder	12 - 12 oz cans	9.65	85	0	10	0	8	19
42	Singaporean Hokkien Fried Mee	32 - 1 kg pkgs.	14	26	0	0	1	5	20
43	Ipoh Coffee	16 - 500 g tins	46	17	10	25	0	1	20
44	Gula Malacca	20 - 2 kg bags	19.45	27	0	15	0	2	20
45	Rogede sild	1k pkg.	9.5	5	70	15	0	8	21
46	Spegesild	4 - 450 g glasses	12	95	0	0	0	8	21
47	Zaanse koeken	10 - 4 oz boxes	9.5	36	0	0	0	3	22
48	Chocolade	10 pkgs.	12.75	15	70	25	0	3	22
49	Maxilaku	24 - 50 g pkgs.	20	10	60	15	0	3	23
50	Valkoinen suklaa	12 - 100 g bars	16.25	65	0	30	0	3	23
51	Manjimup Dried Apples	50 - 300 g pkgs.	53	20	0	10	0	7	24
52	Filo Mix	16 - 2 kg boxes	7	38	0	25	0	5	24
53	Perth Pasties	48 pieces	32.8	0	0	0	1	6	24
54	Tourtière	16 pies	7.45	21	0	10	0	6	25
55	Pâté chinois	24 boxes x 2 pies	24	115	0	20	0	6	25
56	Gnocchi di nonna Alice	24 - 250 g pkgs.	38	21	10	30	0	5	26
57	Ravioli Angelo	24 - 250 g pkgs.	19.5	36	0	20	0	5	26
58	Escargots de Bourgogne	24 pieces	13.25	62	0	20	0	8	27
59	Raclette Courdavault	5 kg pkg.	55	79	0	0	0	4	28
60	Camembert Pierrot	15 - 300 g rounds	34	19	0	0	0	4	28
61	Sirop d'érable	24 - 500 ml bottles	28.5	113	0	25	0	2	29
62	Tarte au sucre	48 pies	49.3	17	0	0	0	3	29
63	Vegie-spread	15 - 625 g jars	43.9	24	0	5	0	2	7
64	Wimmers gute Semmelknödel	20 bags x 4 pieces	33.25	22	80	30	0	5	12
65	Louisiana Fiery Hot Pepper Sauce	32 - 8 oz bottles	21.05	76	0	0	0	2	2
66	Louisiana Hot Spiced Okra	24 - 8 oz jars	17	4	100	20	0	2	2
67	Laughing Lumberjack Lager	24 - 12 oz bottles	14	52	0	10	0	1	16
68	Scottish Longbreads	10 boxes x 8 pieces	12.5	6	10	15	0	3	8
69	Gudbrandsdalsost	10 kg pkg.	36	26	0	15	0	4	15
70	Outback Lager	24 - 355 ml bottles	15	15	10	30	0	1	7
71	Flotemysost	10 - 500 g pkgs.	21.5	26	0	0	0	4	15
72	Mozzarella di Giovanni	24 - 200 g pkgs.	34.8	14	0	0	0	4	14
73	Röd Kaviar	24 - 150 g jars	15	101	0	5	0	8	17
74	Longlife Tofu	5 kg pkg.	10	4	20	5	0	7	4
75	Rhönbräu Klosterbier	24 - 0.5 l bottles	7.75	125	0	25	0	1	12
76	Lakkalikööri	500 ml	18	57	0	20	0	1	23
77	Original Frankfurter grüne Soße	12 boxes	13	32	0	15	0	2	12
\.


--
-- Data for Name: suppliers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.suppliers ("supplierID", "supplier_companyName", "supplier_contactName", "supplier_contactTitle", supplier_address, supplier_city, "supplier_postalCode", supplier_region, supplier_country, supplier_phone, supplier_fax, "supplier_homePage") FROM stdin;
2	New Orleans Cajun Delights	Shelley Burke	Order Administrator	P.O. Box 78934	New Orleans	North America	70117	USA	(100) 555-4822	\N	#CAJUN.HTM#
3	Grandma Kelly's Homestead	Regina Murphy	Sales Representative	707 Oxford Rd.	Ann Arbor	North America	48104	USA	(313) 555-5735	(313) 555-3349	\N
4	Tokyo Traders	Yoshi Nagase	Marketing Manager	9-8 Sekimai Musashino-shi	Tokyo	Eastern Asia	100	Japan	(03) 3555-5011	\N	\N
5	Cooperativa de Quesos 'Las Cabras'	Antonio del Valle Saavedra	Export Administrator	Calle del Rosal 4	Oviedo	Southern Europe	33007	Spain	(98) 598 76 54	\N	\N
6	Mayumi's	Mayumi Ohno	Marketing Representative	92 Setsuko Chuo-ku	Osaka	Eastern Asia	545	Japan	(06) 431-7877	\N	Mayumi's (on the World Wide Web)#http://www.microsoft.com/accessdev/sampleapps/mayumi.htm#
7	Pavlova, Ltd.	Ian Devling	Marketing Manager	74 Rose St. Moonie Ponds	Melbourne	Victoria	3058	Australia	(03) 444-2343	(03) 444-6588	\N
8	Specialty Biscuits, Ltd.	Peter Wilson	Sales Representative	29 King's Way	Manchester	British Isles	M14 GSD	UK	(161) 555-4448	\N	\N
9	PB Knäckebröd AB	Lars Peterson	Sales Agent	Kaloadagatan 13	Göteborg	Northern Europe	S-345 67	Sweden	031-987 65 43	031-987 65 91	\N
10	Refrescos Americanas LTDA	Carlos Diaz	Marketing Manager	Av. das Americanas 12.890	Sao Paulo	South America	5442	Brazil	(11) 555 4640	\N	\N
11	Heli Süßwaren GmbH & Co. KG	Petra Winkler	Sales Manager	Tiergartenstraße 5	Berlin	Western Europe	10785	Germany	(010) 9984510	\N	\N
12	Plutzer Lebensmittelgroßmärkte AG	Martin Bein	International Marketing Mgr.	Bogenallee 51	Frankfurt	Western Europe	60439	Germany	(069) 992755	\N	Plutzer (on the World Wide Web)#http://www.microsoft.com/accessdev/sampleapps/plutzer.htm#
13	Nord-Ost-Fisch Handelsgesellschaft mbH	Sven Petersen	Coordinator Foreign Markets	Frahmredder 112a	Cuxhaven	Western Europe	27478	Germany	(04721) 8713	(04721) 8714	\N
14	Formaggi Fortini s.r.l.	Elio Rossi	Sales Representative	Viale Dante, 75	Ravenna	Southern Europe	48100	Italy	(0544) 60323	(0544) 60603	#FORMAGGI.HTM#
15	Norske Meierier	Beate Vileid	Marketing Manager	Hatlevegen 5	Sandvika	Scandinavia	1320	Norway	(0)2-953010	\N	\N
16	Bigfoot Breweries	Cheryl Saylor	Regional Account Rep.	3400 - 8th Avenue Suite 210	Bend	North America	97101	USA	(503) 555-9931	\N	\N
17	Svensk Sjöföda AB	Michael Björn	Sales Representative	Brovallavägen 231	Stockholm	Northern Europe	S-123 45	Sweden	08-123 45 67	\N	\N
18	Aux joyeux ecclésiastiques	Guylène Nodier	Sales Manager	203, Rue des Francs-Bourgeois	Paris	Western Europe	75004	France	(1) 03.83.00.68	(1) 03.83.00.62	\N
19	New England Seafood Cannery	Robb Merchant	Wholesale Account Agent	Order Processing Dept. 2100 Paul Revere Blvd.	Boston	North America	02134	USA	(617) 555-3267	(617) 555-3389	\N
20	Leka Trading	Chandra Leka	Owner	471 Serangoon Loop, Suite #402	Singapore	South-East Asia	0512	Singapore	555-8787	\N	\N
21	Lyngbysild	Niels Petersen	Sales Manager	Lyngbysild Fiskebakken 10	Lyngby	Northern Europe	2800	Denmark	43844108	43844115	\N
22	Zaanse Snoepfabriek	Dirk Luchte	Accounting Manager	Verkoop Rijnweg 22	Zaandam	Northern Europe	9999 ZZ	Netherlands	(12345) 1212	(12345) 1210	\N
23	Karkki Oy	Anne Heikkonen	Product Manager	Valtakatu 12	Lappeenranta	Scandinavia	53120	Finland	(953) 10956	\N	\N
24	G'day, Mate	Wendy Mackenzie	Sales Representative	170 Prince Edward Parade Hunter's Hill	Sydney	NSW	2042	Australia	(02) 555-5914	(02) 555-4873	G'day Mate (on the World Wide Web)#http://www.microsoft.com/accessdev/sampleapps/gdaymate.htm#
25	Ma Maison	Jean-Guy Lauzon	Marketing Manager	2960 Rue St. Laurent	Montréal	North America	H1J 1C3	Canada	(514) 555-9022	\N	\N
26	Pasta Buttini s.r.l.	Giovanni Giudici	Order Administrator	Via dei Gelsomini, 153	Salerno	Southern Europe	84100	Italy	(089) 6547665	(089) 6547667	\N
27	Escargots Nouveaux	Marie Delamare	Sales Manager	22, rue H. Voiron	Montceau	Western Europe	71300	France	85.57.00.07	\N	\N
28	Gai pâturage	Eliane Noz	Sales Representative	Bat. B 3, rue des Alpes	Annecy	Western Europe	74000	France	38.76.98.06	38.76.98.58	\N
29	Forêts d'érables	Chantal Goulet	Accounting Manager	148 rue Chasseur	Ste-Hyacinthe	North America	J2S 7S8	Canada	(514) 555-2955	(514) 555-2921	\N
\.


--
-- Name: categories_categoryID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."categories_categoryID_seq"', 8, true);


--
-- Name: products_productID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."products_productID_seq"', 77, true);


--
-- Name: suppliers_supplierID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."suppliers_supplierID_seq"', 29, true);


--
-- Name: categories PK_13da6162629fdaeccef5b784271; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "PK_13da6162629fdaeccef5b784271" PRIMARY KEY ("categoryID");


--
-- Name: products PK_caa33ce35fe9bdd6e7fd6268ac4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "PK_caa33ce35fe9bdd6e7fd6268ac4" PRIMARY KEY ("productID");


--
-- Name: suppliers PK_f40405e24bcdf2efdf1b208762d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT "PK_f40405e24bcdf2efdf1b208762d" PRIMARY KEY ("supplierID");


--
-- PostgreSQL database dump complete
--

