// bereken de kosten per plant -- 1 euro per geplante zaatje --
const get_yield_for_plant = (plant) => plant.yield * 1;

// vermedevuldig het aantal planten keer het aantal kroppen
const get_yield_for_crop = (crops) => crops.crop.yield * crops.num_crops;

const reducer = (acc, value) => acc + value;

// met meerdere meerdere planten
const get_total_yield = (plants) => {
    const mapOfCrops = plants.crops.map(crop => {
        return crop.crop.yield * crop.num_crops
    })
    const total = mapOfCrops.reduce(reducer)
    return total
};

// ______________________________________________________
// Opdrachten die je zelf moet maken en invullen

// bereken de kosten voor een crop
const get_costs_for_crop = (plants) => {
    const costsOfCrops = plants.crops.map(crop => {
        return crop.crop.yield * crop.crop.costs
    })
    return costsOfCrops
};

// bereken de inkomsten  voor een crop
const get_revenue_for_crop = (plants) => {
    const revenueCrops = plants.crops.map(crop => {
        return crop.crop.yield * crop.crop.sale_price
    })
    return revenueCrops
};

// bereken de winst voor een crop
const get_profit_for_crop = (plants) => {
    const revenue = get_revenue_for_crop(plants);
    const costs = get_costs_for_crop(plants);
    let multArray = [];
    for (let i = 0; i < Math.min(revenue.length, costs.length); i++) {
        multArray[i] = revenue[i] - costs[i];
    }
    return multArray;
};

// bereken de winst voor meerdere crops
const get_total_profit = (plants) => {
    return get_profit_for_crop(plants).reduce(reducer)
};

// neem omgevingsfactoren mee in het berekenen van de opbrengst
const get_Environment_Factor = (plants, factor) => {
    const getEachPice = plants.crops.map(plant => {
        const getPrice = plant.crop.costs;
        return getPrice * plant.crop.factors.sun[factor.sun] / 100;
    })
    return getEachPice;
}

// doe deze berekening met meerdere omgevingsfactoren
const get_Environmenalt_Factors = (plants, factor) => {
    const sun = factor.sun
    const wind = factor.wind
    const getEachPice = plants.crops.map(plant => {
        const getPrice = plant.crop.costs;
        const getFactior1 = getPrice * plant.crop.factors.sun[sun] / 100;
        const getFactior2 = getPrice * plant.crop.factors.wind[wind] / 100;
        const total = getFactior2 + getFactior1 / 2;
        return total
    })
    return getEachPice;
}

// zorg dat je niet-relevante omgevingsfactoren negeert in je berekeningen
const get_Environmenalt_Factors_ignore = (plants, factor) => {
    let sun = factor.sun
    let wind = factor.wind
    const getEachPice = plants.crops.map(plant => {
        if (sun == undefined) {
            sun = 'medium'
        }
        if (wind == undefined) {
            wind = "low"
        }
        const getPrice = plant.crop.costs;
        const getFactior1 = getPrice * plant.crop.factors.sun[sun] / 100;
        const getFactior2 = getPrice * plant.crop.factors.wind[wind] / 100;
        const total = getFactior2 + getFactior1 / 2;
        return total
    })
    return getEachPice;
}

// bereken de opbrengst in kilo's van een crop get_yield_for_crop,
const get_revenue_for_crop_with_factors = (plants, factor) => {
    const getEachPrice = get_Environmenalt_Factors_ignore(plants, factor)
    const getAmountCrops = plants.crops.map(crop => crop.num_crops);
    let multArray = [];
    for (let i = 0; i < Math.min(getAmountCrops.length, getEachPrice.length); i++) {
        multArray[i] = getAmountCrops[i] * getEachPrice[i];
    }
    return multArray
}

// // bereken de winst van een crop get_profit_for_crop
const get_profit_for_crop_with_factors = (plants, factor) => {
    const getWeighofcrops = get_revenue_for_crop_with_factors(plants, factor)
    const getSale_price = plants.crops.map(crop => crop.crop.sale_price);
    let multArray = [];
    for (let i = 0; i < Math.min(getWeighofcrops.length, getSale_price.length); i++) {
        multArray[i] = getWeighofcrops[i] * getSale_price[i];
    }
    return multArray
}

// bereken de winst voor meerdere crops get_total_profit
const get_total_profit_for_crop_with_factors = (plants, factor) => {
    const getTotal = get_profit_for_crop_with_factors(plants, factor).reduce(reducer)
    console.log(getTotal)
    return getTotal
}

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
    get_Environment_Factor,
    get_Environmenalt_Factors,
    get_Environmenalt_Factors_ignore,
    get_revenue_for_crop_with_factors,
    get_profit_for_crop_with_factors,
    get_total_profit_for_crop_with_factors
};