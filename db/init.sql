create table LuvLuxeProducts (
    id SERIAL PRIMARY KEY,
    imageUrl TEXT,
    brand VARCHAR(40),
    productName VARCHAR(100),
    price FLOAT,
    dateAdded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    accessoryType VARCHAR(40),
    color VARCHAR(40),
    material VARCHAR(40),
    style TEXT,
    detail TEXT,
    length TEXT,
    width TEXT,
    height TEXT,
    drop TEXT,
    productLocation TEXT,
    yearMade INTEGER,
    comesWith Text
);

insert into LuvLuxeDetails(detail, length, width, height, drop, productLocation, yearMade, comesWith, imageUrl, Brand, ProductName, Price, DateAdded, AccessoryType, Color, Material, Style)
values 
('We guarantee this is an authentic LOUIS VUITTON Monogram Speedy 30 or 100% of your money back. This classic, stylish handbag is finely crafted of traditional Louis Vuitton monogram toile coated canvas. The bag features vachetta cowhide rolled leather top handles and trim with polished brass hardware. The top zipper opens to a cocoa brown fabric interior with a hanging patch pocket. This is a exquisite handbag for everyday wear, from Louis Vuitton!','Length: 12in', 'Width: 7.5in', 'Height: 9.50in', 'Drop: 3.50in', 'Scottsdale, AZ', null, 'dustbag','http://fashionphile.com/includes/images/large/BW66649/BW66649-LOUIS%20VUITTON%20MONOGRAM%20SPEEDY%2030_A.jpg', 'Louis Vuitton', 'Monogram Speedy 30', 795, now(), 'Handbags', 'Brown', 'Coated Canvas', 'Handbags'),
('We guarantee this is an authentic LOUIS VUITTON Damier Azur Favorite MM or 100% of your money back. This stylish Louis Vuitton Damier checked coated canvas bag can be worn with the removable vachetta cowhide leather shoulder strap or with the polished brass chain wrist strap. The wrist strap has a clip on one end that can be attached to the D-ring of a larger bag. This bag also features matching damier piping and a flap trimmed with a Louis Vuitton logo plate in brass. The flap opens to a beige canvas fabric lining with a simple patch pocket. This is a perfect compact bag, by Louis Vuitton!', 'Length: 9.75in', 'Width: 2in', 'Height: 6.25in', 'Drop: 7in', 'Scottsdale, AZ', null, 'dustbag and strap','http://fashionphile.com//includes/images/BW179171/louis-vuitton-damier-azur-favorite-mm-00000.jpg', 'Louis Vuitton', 'Damier Azur MM', 1150, now(), 'Handbags', 'Blue', 'Coated Canvas', 'Shoulder Bag'),
('We guarantee this is an authentic LOUIS VUITTON Epi Marly BB Pistache or 100% of your money back. This stylish handbag tote is crafted of Louis Vuitton signature epi textured leather in bright yellow. The bag features rolled leather top handles, an optional shoulder strap with silver links, and accordion sides. The top opens to a matching microfiber interior with room for everyday essentials with the luxury and style of Louis Vuitton!', 'Length: 10.75in', 'Width: 5in', 'Height: 7.50in', 'Drop: 3.50in', 'Scottsdale, AZ', 2014, 'dustbag, strap and clochette','https://www.fashionphile.com/includes/images/thumb/BW201779/louis-vuitton-epi-marly-bb-pistache-000i.jpg', 'Louis Vuitton', 'Epi Marly BB Pistache', 1250, now(), 'Handbags', 'Green', 'Leather', 'Handbags'),
('We guarantee this is an authentic LOUIS VUITTON Epi Alma PM Piment or 100% of your money back. This classic tote is crafted of Louis Vuitton epi leather in orange. It features orange rolled leather top handles, polished silver hardware, and a hanging clochette for the padlock keys. The top zipper opens to a spacious matching microfiber fabric interior with patch pockets. This is an ideal tote for day or evening, by Louis Vuitton!','Length: 12.25in', 'Width: 6in', 'Height: 9.50in', 'Drop: 3.25in', 'Scottsdale, Az', 2014, 'dustbag, clochette, lock and key','https://i.pinimg.com/736x/ac/ea/be/aceabe85ecb54466eb198dc630c6a182--louis-vuitton-alma-louis-vuitton-handbags.jpg', 'Louis Vuitton', 'Epi Alma PM Piment', 1295, now(), 'Handbags', 'Orange', 'Leather', 'Handbags'),
('We guarantee this is an authentic LOUIS VUITTON Empreinte Twice Rose Ballerine or 100% of your money back. This bag is crafted of monogram embossed leather in rose pink. It features two separate compartments, a zipper pocket on the rear and a front envelope-style flap with a button closure that opens to a pink microfiber interior. This is a perfect compact bag, ideal for any occasion, from Louis Vuitton!','Length: 9.5in', 'Width: 1in', 'Height: 6.50in', 'Adjustable Drop: 23in', 'Scottsdale, Az', 2015, null, 'http://fashionphile.com//includes/images/BW179056/louis-vuitton-empreinte-twice-rose-ballerine-00000.jpg', 'Louis Vuitton', 'Empreinte Twice Rose Ballerine', 1315, now(), 'Handbags', 'Pink', 'Coated Canvas', 'Crossbody'),
('We guarantee this is an authentic LOUIS VUITTON Epi Brea MM Dune or 100% of your money back. This stylish tote is crafted of Louis Vuitton signature textured Epi leather in an off white hue. The bag features smooth leather strap top handles with silver links, an optional shoulder strap and a smooth top crest with silver rivets. A overextending top zipper opens to a spacious fabric interior with a zipper and patch pockets. This bag has room for daytime or evening necessities with the one of a kind style, only from Louis Vuitton!','Length: 13.23in', 'Width: 5in', 'Height: 10in', 'Adjustable Drop: 4.75in', 'Scottsdale, Az', 2015, 'dustbag and strap','https://www.google.com/search?q=louis-vuitton-epi-brea-mm-dune-201434&rlz=1C5CHFA_enUS759US760&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj2xIGBvMjWAhVP3GMKHQKVDMQQ_AUICygC&biw=1325&bih=633#imgrc=f85817WVb0bYyM:', 'Louis Vuitton', 'Epi Brea MM Dune', 1145, now(), 'Handbags', 'Beige', 'Leather', 'Handbags'),
('We guarantee this is an authentic LOUIS VUITTON Monogram Neo Neverfull MM Pivoine or 100% of your money back. This chic tote is finely crafted of signature Louis Vuitton monogram on coated canvas. This shoulder bag features vachetta cowhide leather shoulder straps, side cinch cords and trim, and polished brass hardware. The wide top opens to a striped dark pink fabric interior with a hanging zipper pocket. This is an ideal everyday bag, with the sophistication and style of Louis Vuitton!','Length: 12.50in', 'Width: 6in', 'Height: 11.25in', 'Drop: 8.25in', 'Scottsdale, Az', 2015, null, 'https://www.fashionphile.com/includes/images/thumb/BW201352/louis-vuitton-monogram-neo-neverfull-mm-02.jpg', 'Louis Vuitton', 'Monogram Neo Neverfull MM', 850, now(), 'Handbags', 'Brown', 'Coated Canvas', 'Shoulder Bag'),
('We guarantee this is an authentic LOUIS VUITTON Monogram Palm Springs Backpack Mini or 100% of your money back. This petite backpack features a body of sturdy monogram coated canvas with a black calfskin trim and a front zipped pocket. The backpack is reinforced with strong cowhide leather including a top handle and adjustable leather shoulder straps. The the top zipper opens to a nylon fabric with a patch pocket. This is a versatile backpack with timeless appeal, ideal for everyday essentials, from Louis Vuitton!','Length: 6in', 'Width: 3.50in', 'Height: 8.50in', 'Drop: 1.50in', 'Scottsdale, Az', 2016, 'box, dustbag, and straps','http://ca.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-palm-springs-backpack-mini-monogram-canvas-handbags--M41562_PM2_Front%20view.jpg', 'Louis Vuitton', 'Monogram Palm Springs Backpack Mini', 2050, now(), 'Handbags', 'Brown', 'Coated Canvas', 'Backpack');


create table LuvLuxeUsers(
id serial primary key,
username varchar(80)
)


create table Orders
(id SERIAL PRIMARY KEY,
shipTo VARCHAR(80),
BillTo VARCHAR(80),
orderDate TIMESTAMP,
Total FLOAT,
Status VARCHAR(30),
UserId Int references LuvLuxeUsers(id)
);


create table lineItems 
(
id serial primary key,
productid int references luvluxeproducts(id),
orderID int references Orders(id),
quantity INTEGER
)
