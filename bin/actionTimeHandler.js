const dateFns = require("date-fns");

module.exports = {
    timeParse: (statement, msg) => {
        try {
            args = statement.split(" ").filter((arry) => { return arry });

            if (args.length < 2) {
                return "A reason was not supplied, try again!";
            };

            timeArgs = args[0].split("");
            durationTime = [];
            unitTime = [];

            timeArgs.forEach((val) => {
                if (isNaN(val)) {
                    return unitTime.push(val);
                } else {
                    return durationTime.push(val);
                }
            });

            argUnit = unitTime.join("")

            if (argUnit === "perma" || argUnit === "perm") {
                return 0;
            };

            if (durationTime.join("") <= 0) {
                return "A valid duration time greater than zero was not supplied, try again!";
            }

            /* I tried to find alternative way of passing the unit of time used in dateFns options. So far this is the best working solution I have. If I find a alternative in future I will update, please feel free to let me know of a better option. */

            let newDate;
            switch (argUnit) {
                case "min":
                case "mins":
                case "minute":
                case "minutes":
                    newDate = dateFns.add(new Date(), { minutes: Number(durationTime.join("")) })
                    break;
                case "hr":
                case "hrs":
                case "hour":
                case "hours":
                    newDate = dateFns.add(new Date(), { hours: Number(durationTime.join("")) })
                    break;
                case "d":
                case "ds":
                case "day":
                case "days":
                    newDate = dateFns.add(new Date(), { days: Number(durationTime.join("")) })
                    break;
                case "wk":
                case "wks":
                case "week":
                case "weeks":
                    newDate = dateFns.add(new Date(), { weeks: Number(durationTime.join("")) })
                    break;
                case "mths":
                case "mth":
                case "month":
                case "months":
                    newDate = dateFns.add(new Date(), { months: Number(durationTime.join("")) })
                    break;
                case "yr":
                case "yrs":
                case "year":
                case "years":
                    newDate = dateFns.add(new Date(), { years: Number(durationTime.join("")) })
                    break;
            }

            if (!dateFns.getTime(newDate)) {
                return "A valid duration was not supplied, try again!"
            } else {
                return dateFns.getTime(newDate)
            }
            
        } catch (err) {
            return
        }
    }
}