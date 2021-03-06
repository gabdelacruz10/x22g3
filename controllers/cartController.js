var PreenlistedCourses = require("../models/preenlisted_courses");
var PreenlistCourse = require("../models/preenlist_course");
var EnrolledCourses = require("../models/preenlisted_courses");

exports.cart_landing_page_get = (req, res) => {
    res.render("cart", {
        title: "Cart | Animo.sys",
    });
};

// Respond to /cart/preenlistment
exports.cart_preenlisted_courses_list_get = (req, res) => {
    console.log("TODO: get data from PreenlistedCourses");
    var data = [];

    for (let i = 0; i < req.query[Object.keys(req.query)[0]].length; i++) {
        var obj = {};
        for (const key in req.query) {
            if (req.query.hasOwnProperty(key)) {
                const el = req.query[key];
                obj[key] = el[i];
            }
        }

        data.push(obj);
    }

    console.log(data);
    res.render("cart_preenlistment", {
        title: "Preenlistment Cart | Animo.sys",
        data: data,
    });
};

exports.cart_enrolled_courses_list_get = (req, res) => {
    console.log("TODO: get data from EnrolledCourses");
    res.render("cart_enrollment", {
        title: "Enrollment Cart | Animo.sys",
        addedStyles: ["forms"],
    });
};
