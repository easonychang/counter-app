import mysql.connector
from mysql.connector import Error
from mysql.connector import errorcode
try:
   connection = mysql.connector.connect(host='localhost',
                             database='pokemonGenOneDB',
                             user='root',
                             password='eason')
   sql_insert_query = """ INSERT INTO `pokemonDB`
                          (`pokemon_id`, `pokemon_name`, `pokemon_imageUrl`) VALUES (2,'Ivysaur','"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"')"""
   cursor = connection.cursor()
   result  = cursor.execute(sql_insert_query)
   connection.commit()
   print ("Record inserted successfully into pokemonDB table")
except mysql.connector.Error as error :
    connection.rollback() #rollback if any exception occured
    print("Failed inserting record into pokemonDB table {}".format(error))
finally:
    #closing database connection.
    if(connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection is closed")