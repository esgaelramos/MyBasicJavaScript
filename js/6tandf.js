// -------------  TRUTHY Y  FALSY ------------- // 
//+Falsy
//la ausencia de valor da un falso
Boolean();
//--D false
Boolean(0);
//--D false
Boolean(null);
//--D false
Boolean(NaN);
//--D false
Boolean(undefined);
//--D false
Boolean(false);
//--D false
Boolean("");
//--D false //los strings vacíos

//+Truthy
Boolean(1);
//--D true
//cualquier número
Boolean(-1);
//--D true
//hasta negativos
Boolean([]);
//--D true
Boolean({});
//--D true
Boolean(function() {});
//--D true
Boolean("a");
//--D true //cualquier string que no esté vacío
Boolean(true);
//--D true