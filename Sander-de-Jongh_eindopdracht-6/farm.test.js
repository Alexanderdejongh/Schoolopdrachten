const {
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
} = require("./farm");

describe("get_yield_for_plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(get_yield_for_plant(corn)).toBe(30);
    });
});

describe("get_yield_for_crop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_yield_for_crop(input)).toBe(30);
    });
});

describe("get_total_yield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
        ];
        expect(get_total_yield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, num_crops: 0 }];
        expect(get_total_yield({ crops })).toBe(0);
    });
});

const corn = {
    name: "corn",
    yield: 3,
    sale_price: 3,
    costs: 1,
    factors: {
        sun: {
            high: 150,
            medium: 100,
            low: 80,
        },
        wind: {
            high: 70,
            medium: 90,
            low: 100,
        },
    }
};
const pumpkin = {
    name: "pumpkin",
    yield: 4,
    sale_price: 5,
    costs: 2,
    factors: {
        sun: {
            high: 150,
            medium: 100,
            low: 80,
        },
        wind: {
            high: 100,
            medium: 100,
            low: 100,
        },
    }
};
const weath = {
    name: "weath",
    yield: 7,
    sale_price: 2,
    costs: 1,
    factors: {
        sun: {
            high: 150,
            medium: 100,
            low: 80,
        },
        wind: {
            high: 40,
            medium: 70,
            low: 100,
        },
    }
};

describe("get_costs_for_crop", () => {
    test("Calculate price per crop", () => {
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
            { crop: weath, num_crops: 14 },
        ];
        expect(get_costs_for_crop({ crops })).toStrictEqual([3, 8, 7]);
    });
});

describe("get_revenue_for_crop", () => {
    test("Calculate cost per crop", () => {
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
            { crop: weath, num_crops: 14 },
        ];
        expect(get_revenue_for_crop({ crops })).toStrictEqual([9, 20, 14]);
    });
});

describe("get_profit_for_crop", () => {
    test("Calculate total revenue with multiple crops", () => {
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
            { crop: weath, num_crops: 14 },
        ];
        expect(get_profit_for_crop({ crops })).toStrictEqual([6, 12, 7]);
    });
});

describe("get_profit_for_crop", () => {
    test("Calculate total profit crops", () => {
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
            { crop: weath, num_crops: 14 },
        ];
        expect(get_total_profit({ crops })).toBe(25);
    });
});

describe("get_EnvironmentFactor", () => {
    test("Calculate environment factor", () => {
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
            { crop: weath, num_crops: 14 },
        ];
        const environment_factors = {
            sun: "low",
        };
        expect(get_Environment_Factor({ crops }, environment_factors)).toStrictEqual([0.8, 1.6, 0.8]);
    });
});

describe("get_Environmenalt_Factors", () => {
    test("Calculate multiple environment factors", () => {
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
            { crop: weath, num_crops: 14 },
        ];
        const environment_factors = {
            sun: "high",
            wind: "medium",
        };

        expect(get_Environmenalt_Factors({ crops }, environment_factors)).toStrictEqual([1.65, 3.5, 1.45]);
    });
});

describe("get_Environmenalt_Factors_ignore", () => {
    test("Calculate multiple environment factors", () => {
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
            { crop: weath, num_crops: 14 },
        ];
        const environment_factors = {
            sun: "low",
        };
        expect(get_Environmenalt_Factors_ignore({ crops }, environment_factors)).toStrictEqual([1.4, 2.8, 1.4]);
    });
});

describe("get_revenue_for_crop_with_factors", () => {
    test("Calculate multiple environment factors for all crops", () => {
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
            { crop: weath, num_crops: 14 },
        ];
        const environment_factors = {
            sun: "high",
            wind: "medium",
        };
        expect(get_revenue_for_crop_with_factors({ crops }, environment_factors)).toStrictEqual([8.25, 7, 20.3]);
    });
});

describe("get_profit_for_crop_with_factors", () => {
    test("Calculate price for multiple environment factors", () => {
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
            { crop: weath, num_crops: 14 },
        ];
        const environment_factors = {
            sun: "high",
            wind: "medium",
        };
        expect(get_profit_for_crop_with_factors({ crops }, environment_factors)).toStrictEqual([24.75, 35, 40.6]);
    });
});

describe("get_profit_for_crop_with_factors", () => {
    test("Calculate price for multiple environment factors", () => {
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
            { crop: weath, num_crops: 14 },
        ];
        const environment_factors = {
            sun: "high",
            wind: "medium",
        };
        expect(get_total_profit_for_crop_with_factors({ crops }, environment_factors)).toBe(100.35);
    });
});

// __________________________________________________
// extra testen met verschillende dingen

// extra graansoort
describe("get_profit_for_crop_with_factors", () => {
    test("Calculate price for multiple environment factors", () => {
        const barley = {
            name: "barley",
            yield: 7,
            sale_price: 4,
            costs: 1,
            factors: {
                sun: {
                    high: 190,
                    medium: 100,
                    low: 80,
                },
                wind: {
                    high: 40,
                    medium: 70,
                    low: 100,
                },
            }
        };
        const crops = [
            { crop: corn, num_crops: 500 },
            { crop: pumpkin, num_crops: 299 },
            { crop: weath, num_crops: 140 },
            { crop: barley, num_crops: 100 },
        ];
        const environment_factors = {
            sun: "high",
            wind: "medium",
        };
        expect(get_total_profit_for_crop_with_factors({ crops }, environment_factors)).toBe(8773.5);
    });
});

// andere omstandigheden en nog veel meer van alles!
describe("get_profit_for_crop_with_factors", () => {
    test("Calculate price for multiple environment factors", () => {
        const barley = {
            name: "barley",
            yield: 7,
            sale_price: 4,
            costs: 1,
            factors: {
                sun: {
                    high: 190,
                    medium: 100,
                    low: 80,
                },
                wind: {
                    high: 40,
                    medium: 70,
                    low: 100,
                },
            }
        };
        const crops = [
            { crop: corn, num_crops: 5400 },
            { crop: pumpkin, num_crops: 2799 },
            { crop: weath, num_crops: 1400 },
            { crop: barley, num_crops: 1000 },
        ];
        const environment_factors = {
            sun: "low",
            wind: "high",
        };
        expect(get_total_profit_for_crop_with_factors({ crops }, environment_factors)).toBe(62446);
    });
});