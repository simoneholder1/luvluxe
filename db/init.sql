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
('We guarantee this is an authentic LOUIS VUITTON Monogram Palm Springs Backpack Mini or 100% of your money back. This petite backpack features a body of sturdy monogram coated canvas with a black calfskin trim and a front zipped pocket. The backpack is reinforced with strong cowhide leather including a top handle and adjustable leather shoulder straps. The the top zipper opens to a nylon fabric with a patch pocket. This is a versatile backpack with timeless appeal, ideal for everyday essentials, from Louis Vuitton!','Length: 6in', 'Width: 3.50in', 'Height: 8.50in', 'Drop: 1.50in', 'Scottsdale, Az', 2016, 'box, dustbag, and straps','http://ca.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-palm-springs-backpack-mini-monogram-canvas-handbags--M41562_PM2_Front%20view.jpg', 'Louis Vuitton', 'Monogram Palm Springs Backpack Mini', 2050, now(), 'Handbags', 'Brown', 'Coated Canvas', 'Backpack'),
('We guarantee this is an authentic GIVENCHY Shiny Lord Calfskin Mini Antigona Black or 100% of your money back. The shoulder bag features sturdy rolled leather top handles with polished silver hardware, an optional shoulder strap and signature extended sides. The top opens with a silver zipper to a black fabric interior with zipper and patch pockets. This tote is suitable for day or evening, from Givenchy!','Length: 8.50 in',
'Width: 5 in', 'Height: 7.50 in', 'Scottsdale, AZ', null, 'dustbag and strap', 'http://fashionphile.com//includes/images/BW66123/BW66123-GIVENCHY%20ANTIGONA%20SHINY%20LORD%20BAG%20MEDIUM%20BLACK_a.jpg', 'Givenchy', 'Shiny Lord Calfskin Mini',1450, now(),'Handbags','Black','Leather','Handbags'),
('We guarantee this is an authentic GIVENCHY Calfskin Bow Cut Mini Chain Wallet Fuchsia or 100% of your money back. This chic wallet is finely crafted of smooth calfskin leather in bright pink. The bag features a polished silver chain link shoulder strap and a polished silver press lock. The flap opens to a light pink suede interior with card slots and a hanging pocket. This is an ideal clutch for a splash of classic chic, only from Givenchy.',
'Length: 6.25 in',
'Width: 2 in',
'Height: 5 in',
'Drop: 22 in','Scottsdale, AZ', 2016, 'dustbag and strap', 'http://fashionphile.com//includes/images/BW189006/givenchy-calfskin-bow-cut-mini-chain-wallet-fuchsia-00.jpg','Givenchy','Calfskin Bow Cut Mini Chain Wallet Fuchsia',550,now(),'Handbags','Pink','Leather','Crossbody'),
('We guarantee this is an authentic GIVENCHY Smooth Calfskin Mini Horizon Satchel Navy or 100% of your money back. This chic satchel is crafted of smooth calfskin leather and features rolled leather top handles, an optional and adjustable shoulder strap and an open top. The inside of this tote is crafted of black leather with a patch pocket. This is an ideal satchel for all occasions from Givenchy!',
'Length: 8.25 in',
'Width: 4.25 in',
'Height: 7 in',
'Drop: 3 in','Scottsdale, AZ', 2016, 'strap', 'https://www.fashionphile.com/includes/images/thumb/BD199381/givenchy-smooth-calfskin-mini-horizon-satchel-dark-blue-00.jpg', 'Givenchy', 'Smooth Calfskin Mini Horizon Satchel', 1295, now(),'Handbags', 'Blue', 'Leather','Crossbody'),
('We guarantee this is an authentic GIVENCHY Smooth Calfskin Nano Backpack Bright Pink or 100% of your money back. This cutting-edge backpack is created of smooth calfskin leather in pink. The bag features adjustable leather shoulder straps, a small top handle and an external zipper pocket and silver hardware. The wrap-around zippers open to a spacious beige fabric interior with a pocket. This backpack is ideal for everyday utility or travel, from Givenchy!',
'Length: 6.75 in',
'Width: 3.50 in',
'Height: 9.25 in', null, 'Scottsdale, AZ',2017, 'dustbag and strap', 'http://fashionphile.com//includes/images/BW198562/givenchy-smooth-calfskin-nano-backpack-bright-pink-00.jpg', 'Givenchy', 'Smooth Calfskin Backpack',995, now(), 'Handbags', 'Pink', 
'Leather', 'Backpack'),
('We guarantee this is an authentic GIVENCHY Calfskin Small Studded Antigona Beige Buff or 100% of your money back. This stylish tote is crafted of luxuriously polished smooth leather in beige with silver studs along the trim. The bag features sturdy rolled leather top handles, an optional leather shoulder strap with silver hardware, and extended sides. The top opens with a zipper to a beige fabric interior with a zipper pocket. This is a fabulous tote, ideal for day and evening use, from Givenchy!',
'Length: 11 in',
'Width: 7 in',
'Height: 9 in',
'Drop: 3.50 in','Scottsdale, AZ', 2015, 'dustbag and strap', 'http://fashionphile.com//includes/images/BW181773/givenchy-calfskin-small-studded-antigona-beige-buff-00000.jpg', 'Givenchy', 'Calfskin Small Studded Antigona', 1395, now(), 'Handbags',
'Beige', 'Leather','Crossbody'),
('We guarantee this is an authentic GIVENCHY Calfskin Debossed Logo Crossbody Light Pink or 100% of your money back. This chic shoulder bag is finely crafted of sugar-grained goatskin leather in pink with ''GIVENCHY Paris'' debossed on the front. The bag features an adjustable shoulder strap and opens to a matching leather interior with a card slot and zipper insert. A luxurious and eye catching strap wallet, this bag is ideal for daily excursions of all kinds, only from Givenchy!',
'Length: 7.75 in',
'Width: 1.25 in',
'Height: 4.25 in', 'Scottsdale, AZ', null, 'dustbag, zipper insert, and strap', 'http://www.fashionphile.com/includes/images/thumb/BW197007/givenchy-calfskin-debossed-logo-crossbody-light-pink-00.jpg',
'Givenchy','Calfskin Debossed Logo Crossbody', 795, now(), 'Handbags', 'Pink', 'Leather','Crossbody'),
('We guarantee this is an authentic CHANEL Lambskin Quilted Jumbo Double Flap Black or 100% of your money back. This large shoulder flap style bag is superbly crafted of soft and supple diamond quilted lambskin leather in black. This chic shoulder bag features polished gold chain link shoulder straps that are threaded with matching black leather. The front flap has a polished gold Chanel CC turn lock that opens to another flap with bordeaux leather interior and patch pockets. This is an excellent bag that is ideal for both day and evening use, with a one of a kind look, from Chanel!',
'Length: 11.75 in',
'Width: 3.75 in',
'Height: 8.25 in',
'Adjustable Drop: 13 in','Scottsdale, AZ',null,'dustbag','http://fashionphile.com//includes/images/BW180947/chanel-lambskin-quilted-jumbo-double-flap-black-00008.jpg','Chanel','Lampskin Quilted Jumbo Double Flap',3995,now(),'Handbags','Black','Leather','Shoulder Bag'),
('We guarantee this is an authentic CHANEL Caviar Quilted Mini Square Flap Pink or 100% of your money back. The bag features a long leather threaded ruthenium chain link shoulder strap and a ruthenium Chanel CC turn lock. This opens to a pink leather interior with a zipper and patch. This is a small shoulder bag, ideal for day or evening and just the essentials, from Chanel!',
'Length: 7 in',
'Width: 2.75 in',
'Height: 5.50 in',
'Drop: 19 in','Scottsdale, AZ',null,'dustbag','http://fashionphile.com//includes/images/BW184510/chanel-caviar-quilted-mini-square-flap-pink-00.jpg','Chanel','Caviar Quilted Mini Square Flap',2495,now(),'Handbags','Pink','Leather','Crossbody'),
('We guarantee this is an authentic CHANEL Caviar Quilted Grand Shopping Tote GST White or 100% of your money back. This elegant tote is crafted of pebbled leather in white. It features leather threaded polished silver shoulder chains with shoulder pads, diamond quilting, quilted CC logo and an exterior flat pocket. The top is open to a matching fabric interior with zipper and patch pockets and a central zipper compartment. This is a perfect everyday tote from Chanel!',
'Length: 13.25 in',
'Width: 5 in',
'Height: 9.75 in',
'Drop: 9.75 in','Scottsdale, AZ',2008, 'dustbag', 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70802185','Chanel','Caviar Quilted Grand Shopping tote GST',1515,now(),'Handbags','White','Leather','Shoulder Bag'),
('We guarantee this is an authentic CHANEL Caviar Quilted Jumbo Double Flap Beige Clair or 100% of your money back. This stylish shoulder bag is crafted of luxurious diamond-quilted caviar leather in light beige in the larger size. The hand bag features polished gold chain-link shoulder straps threaded with leather and the flap has a polished gold Chanel CC turn lock that opens to a matching leather interior with zipper and patch pockets. This is an excellent shoulder bag that is ideal for every occasion for the timeless quality and style, from Chanel.',
'Length: 11.75 in',
'Width: 3.25 in,'
'Height: 7.75 in',
'Adjustable Drop: 12.75 - 23.50 in', 'Scottsdale, AZ',null, 'dustbag','http://fashionphile.com//includes/images/BD65651/BD65651-CHANEL%20caviar%20quilted%20jumbo%20double%20flap%20beige%20_a.jpg','Chanel','Caviar Quilted Jumbo Double Flap Clair', 4250, now(),'Handbags','Beige','Leather','Shoulder Bag'),
('We guarantee this is an authentic CHANEL Caviar Perforated Bowler White or 100% of your money back. This stylish bowler style tote is finely crafted of evenly square perforated white caviar leather. The bag features leather top strap handles and an unperforated frontal Chanel CC logo patch. The top zipper opens to a white Chanel name logo fabric interior with a zipper pocket. This is a fantastic tote for daytime use from Chanel!',
'Length: 8.75 in',
'Width: 6 in',
'Height: 7 in',
'Drop: 5 in', 'Scottsdale, AZ',null, 'dustbag', 'http://www.fashionphile.com/includes/images/large/BW76472/BW76472-CHANEL-Leather-Perforated-Bowler-White-0.jpg','Caviar Perforated Bowler', 795, now(),'Handbags','White','Leather','Handbags'),
('We guarantee this is an authentic CHANEL Metallic Patent Quilted Grand Shopping Tote GST Bronze or 100% of your money back. This elegant tote is ideal for day or evening with its classic shape and sleek finish. It features glossy patent leather in metallic bronze and leather-threaded silver chain link shoulder straps with leather shoulder pads. This tote has a open top to a matching fabric lining, patch and zipper pockets, and a central zipper compartment. Enjoy this everyday tote, only from Chanel!',
'Length: 13.25 in',
'Width: 5 in',
'Height: 9.75 in',
'Drop: 9.50 in','Scottsdale, AZ',null,'Authenticity Card','http://fashionphile.com//includes/images/BW150007/BW150007-1-00000.jpg','Metallic Patent Quilted Grand Shopping Tote GST', 1495, now(), 'Handbags', 'Metallic','Patent','Shoulder Bag'),
('We guarantee this is an authentic CHANEL Patent Quilted Medium Boy Flap Orange or 100% of your money back. This chic shoulder bag is crafted of glossy diamond quilted patent leather in bright neon orange with a peripheral linear trim. The bag features an aged gold chain link shoulder strap with a leather shoulder pad, and a frontal unique aged gold squared Chanel CC press lock. This opens the front flap to a fabric interior with pockets. This is a fierce shoulder bag with a timeless look, only from Chanel',
'Length: 9.75 in',
'Width: 3.50 in',
'Height: 6 in',
'Drop: 20 in','Scottsdale, AZ', null,'dustbag','http://fashionphile.com//includes/images/BW178308/chanel-patent-quilted-medium-boy-flap-orange-00Qg.jpg','Patent Quilted Medium Boy Flap',2805, now(),'Handbags','Orange','Patent','Shoulder Bag')

;


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
