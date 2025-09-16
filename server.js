const express = require('express')
const app = express()
const PORT = 8000

const vitamins = {
    'vitamin a': {
        'name':'vitamin a',
        'other names':'retinol',
        'daily recommended':'700-900 mcg',
        'use':'prevents damage to cells, prevents some eye problems',
        'foods':'sweet potato, cantaloupe, spinach, carrots'
    },
    'vitamin b1': {
        'name':'vitamin b1',
        'other names':'thiamin',
        'daily recommended':'1.1-1.2 mg',
        'use':'helps turn food into energy, key for structure of brain cells',
        'foods':'black beans, lentils, seeds, whole grains'
    },
    'vitamin b2': {
        'name':'vitamin b2',
        'other names':'riboflavin',
        'daily recommended':'1.1-1.3 mg',
        'use':'necessary for functioning cells, prevention of migraines',
        'foods':'fortified grains, asparagus, green veggies'
    },
    'vitamin b3': {
        'name':'vitamin b3',
        'other names':'niacin',
        'daily recommended':'',
        'use':'helps turn food into energy and store it, protect skin and tissues, improve cholesterol levels',
        'foods':'crimini mushrooms, peanuts'
    },
    'vitamin b6': {
        'name':'vitamin b6',
        'other names':'pyridoxine',
        'daily recommended':'1.3mg',
        'use':'plays a role in many body reactions, protect against memory loss, protect against certain cancers, helps with PMS',
        'foods':'leafy and root vegetables, bananas, avocados, watermelon, legumes'
    },
    'vitamin b7': {
        'name':'vitamin b7',
        'other names':'biotin',
        'daily recommended':'',
        'use':'helps convert food to energy and breadk down glucose',
        'foods':'whole grains, almonds, soybeans'
    },
    'vitamin b9': {
        'name':'vitamin b9',
        'other names':'folate',
        'daily recommended':'400mcg',
        'use':'vital for new cell creation and DNA synthesis',
        'foods':'legumes, spinach, lsafy greens, chickpeas, tomato, asparagus'
    },
    'vitamin b12': {
        'name':'vitamin b12',
        'other names':'cobalamin',
        'daily recommended':'2.4mcg',
        'use':'helps break down food for energy',
        'foods':'cereal with added vitamins'
    },
    'vitamin c': {
        'name':'vitamin c',
        'other names':'ascorbic acid',
        'daily recommended':'75-90 mg',
        'use':'helps staying hydrated, helps bones skin and muscles grow',
        'foods':'bell peppers, papaya, strawberries, broccoli, cantaloupe, leafy greens'
    },
    'calcium': {
        'name':'calcium',
        'other names':'',
        'daily recommended':'1,000 mg',
        'use':'strengthens bones and teeth, key to make muscles move',
        'foods':'green vegetables'
    },
    'chromium': {
        'name':'chromium',
        'other names':'',
        'daily recommended':'',
        'use':'helps keep blood sugar levels steady',
        'foods':'broccoli, garlic, english muffins'
    },
    'vitamin d': {
        'name':'vitamin d',
        'other names':'',
        'daily recommended':'',
        'use':'helps keep bones strong, helps nerves carry messages, fights germs',
        'foods':'sunshine, added in orange juice'
    },
    'vitamin e': {
        'name':'vitamin e',
        'other names':'tocopherol',
        'daily recommended':'15 mg',
        'use':'protects cells from damage, keeps blood moving, helps cells communicate',
        'foods':'cunflower seeds, almonds, hazelnuts, peanuts, spinach, broccoli'
    },
    'folic acid': {
        'name':'folic acid',
        'other names':'',
        'daily recommended':'',
        'use':'helps make DNA',
        'foods':'asparagus, brussels sprouts, dark leafy greens, oranges, beans, peas, lentils'
    },
    'vitamin k': {
        'name':'vitamin k',
        'other names':'',
        'daily recommended':'',
        'use':'helps blood clotting and healthy bones',
        'foods':'spinach, kale, broccoli, natto (fermented soy beans)'
    },
    'iodine': {
        'name':'iodine',
        'other names':'',
        'daily recommended':'',
        'use':'helps thyroid to make hormones for metabolism',
        'foods':'table salt, seaweed'
    },
    'iron': {
        'name':'iron',
        'other names':'',
        'daily recommended':'8-18mg',
        'use':'keeps red blood cells healthy to get oxygen to your tissues',
        'foods':'beans, lentils, spinach,  breakfast cereals, dark chocolate'
    },
    'magnesium': {
        'name':'magnesium',
        'other names':'',
        'daily recommended':'310-420mg',
        'use':'plays a role in making your muscles squeeze and keeping your heart beating, helps control blood sugar and blood pressure, make proteins and DNA, turn food into energy',
        'foods':'almonds, cashews, spinach, soybeans, avocado, whole grains'
    },
    'potassium': {
        'name':'potassium',
        'other names':'potassium',
        'daily recommended':'',
        'use':'keeps blood pressure in range, helps kidneys work',
        'foods':'cantaloupe, carrots, tomatoes'
    },
    'selenium': {
        'name':'selenium',
        'other names':'',
        'daily recommended':'',
        'use':'fight off infections, helping thyroid gland work',
        'foods':'brazil nuts, bread'
    },
    'zinc': {
        'name':'zinc',
        'other names':'',
        'daily recommended':'8-11mg',
        'use':'necessary for taste and smell, immune system, helps healing and sight',
        'foods':'sesame, pumpkin seeds, chickpeas, lentils, cahsews'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/vitamins', (request, response) => {
    response.json(vitamins)
})

app.get('/api/vitamins/:vitamin', (request, response) => {
    const vitaminName = request.params.vitamin.toLowerCase()
    
    if ( vitamins[vitaminName] ){
        response.json(vitamins[vitaminName])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
})