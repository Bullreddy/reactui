class SvgCardSchema {

    data = {
        
                /**
                 *
                 * @type {{Number}}
                 * Complete bar value.
                 */
                value: {
                    type : Number,
                    required : true
                },
                 /**
                 *
                 * @type {{String}}
                 * Bar label
                 */
                label: {
                    type : String,
                    required : true
                },
                /**
                *
                * @type {{Number}}
                * Bar max value
                */
               max: {
                   type : Number,
                   required : false,
                   default : 100
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
                default : "#58595b"
            },
             /**
             *
             * @type {{String}}
             * Font color
             */
            color: {
                type : String,
                required : false,
                default : "#9b3f7f"
            },
             /**
             *
             * @type {{Number}}
             * Bar max value
             */
            max: {
                type : Number,
                required : false,
                default : 100
            }

        };
    
}
    
  