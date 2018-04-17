class SvgCardSchema {

    data = {

                /**
                 *
                 * @type {{String}}
                 * Label.
                 */
                headerLabel: {
                    type : String,
                    required : true
                },
                 /**
                 *
                 * @type {{String}}
                 * Label
                 */
                footerLabel: {
                    type : String,
                    required : true
                },

                /**
                 *
                 * @type {{String}}
                 * Label
                 */
                leftLabel: {
                    type : String,
                    required : true
                },
                 /**
                 *
                 * @type {{String}}
                 * Label
                 */
                rightLabel: {
                    type : String,
                    required : true
                },

                /**
                 *
                 * @type {{String}}
                 * Label.
                 */
                rightTopLabel: {
                    type : String,
                    required : true
                },
                 /**
                 *
                 * @type {{String}}
                 * Label
                 */
                rightMiddleLabel: {
                    type : String,
                    required : true
                },
                /**
                *
                * @type {{String}}
                * Label
                */
               rightBottomLabel: {
                   type : String,
                   required : true
               },
                /**
                *
                * @type {{String}}
                * Value
                */
               footerValue: {
                   type : String,
                   required : true
               },

               /**
                *
                * @type {{String}}
                * Value.
                */
               leftValue: {
                   type : String,
                   required : true
               },
                /**
                *
                * @type {{String}}
                * Value
                */
               rightValue: {
                   type : String,
                   required : true
               },

               /**
                *
                * @type {{String}}
                * Value
                */
               rightTopValue: {
                   type : String,
                   required : true
               },
                /**
                *
                * @type {{String}}
                * Value
                */
               rightMiddleValue: {
                   type : String,
                   required : true
               },
               /**
               *
               * @type {{String}}
               * Value
               */
              rightBottomValue: {
                  type : String,
                  required : true
              }

            };


        config = {

            /**
             *
             * @type {{String}}
             * Bar background color
             */
            bgColor: {
                type : String,
                required : false,
                default : "#E5E7E9"
            },
             /**
             *
             * @type {{Number}}
             * Screen Width
             */
            width: {
                type : Number,
                required : false,
                default : 300
            },
             /**
             *
             * @type {{Number}}
             * Screen Height
             */
            height: {
                type : Number,
                required : false,
                default : 100
            }

        };

}
