module.exports={
    thunk : function(fn){
        return function(){
            let args = new Array(arguments.length);
            let ctx = this;
    
            for(var i=0;i<args.length;i++){
                args[i]=arguments[i];
            }
    
            return function(done){
                let celld;
                args.push(function(){
                    if (celld) return;
                    celld = true;
                    done.apply(null, arguments);
                });
    
                try {
                    fn.apply(ctx, args);
                } catch (err) {
                    done(err);
                }
            }
        }
    }
}