select LuvLuxeProducts.id, imageUrl, brand, productName, detail, length, width, height, drop, productLocation, yearMade, comesWith, price
from LuvLuxeProducts
where LuvLuxeProducts.id=$1

