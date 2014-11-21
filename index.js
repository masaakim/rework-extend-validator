module.exports = function (ast, rework) {

    ast.rules.forEach(function (rule) {

        var ph_selectors = [];
        var ph_count = 0;

        rule.declarations.forEach(function (declaration) {

            if (declaration.property.match(/^(inherit|extend)s?$/i)) {
                ph_selectors.push(declaration.value);
                ph_count++;
            }

            if (ph_count >= 2) {
                var matched_rules = [];

                ph_selectors.forEach(function (ph_selector) {
                    ast.rules.forEach(function (ru) {
                        ru.selectors.forEach(function (selector) {
                            if (selector === ph_selector) {
                                matched_rules.push(ru);
                            }
                        });
                    });
                });

                matched_rules.forEach(function (matched_rule, index) {
                    var tmp_matched_rules = matched_rules.concat();

                    matched_rule.declarations.forEach(function (dec) {
                        tmp_matched_rules.splice(index, 1);

                        tmp_matched_rules.forEach(function (tmp_rule) {
                            tmp_rule.declarations.forEach(function (tmp_dec) {
                                if (dec.property === tmp_dec.property && !dec.property.match(/^(inherit|extend)s?$/i)) {
                                    var err = new Error('rework-extend-validator: extended rules have same properties');
                                    throw err;
                                }
                            });
                        });
                    });
                });
            }
        });
    });
}
