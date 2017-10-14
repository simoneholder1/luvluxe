delete from lineitems

where productid=$1 and orderid=$2;

-- select *
-- from lineitems
-- join luvluxeproducts on lineitems.productid = luvluxeproducts.id
-- where orderid= $1