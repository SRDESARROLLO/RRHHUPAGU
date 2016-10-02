<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>

 /*--------------------------NO ELIMINAR--------------------------*/
 /*--------------------------NO ELIMINAR--------------------------*/
 /*--------------------------NO ELIMINAR--------------------------*/
 

 
  $(function() {
  
   loadAll();
  
  
   google.script.run
       .withSuccessHandler(function(contents) {
            // Respond to success conditions here.
            updateDisplay(contents);
          })
       .withFailureHandler(function(msg) {
            // Respond to failure conditions here.
            $('#main-heading').text(msg);
            $('#main-heading').addClass("error");
            $('#error-message').show();
          })
       .getFolderContents(folderId);
  });
  
  
  function loadCorreoActual(data)
  {
    document.getElementById('correoactual').value = data;
  }
  
  function lload()
  {
    setTimeout(loadAll(),3000);
  }
  
  function insCorreo()
  {
  
     var CODIGO = document.getElementById('codigoactual').value;
     var DOCUMENTO = document.getElementById('dniactual').value;
     var EMAIL = document.getElementById('correoactual').value;
     google.script.run.actualizarCorreo(CODIGO,DOCUMENTO,EMAIL);
     lload();
  }
  
  function loadAll()
  {
         
    google.script.run.withSuccessHandler(loadCorreoActual).correoActual();
     $("#divInicio").hide();
      $("#divPrincipal").show();
         google.script.run.withSuccessHandler(loadCargo).comboCargo();
         google.script.run.withSuccessHandler(loadTipoDoc).comboTipoDoc();
         google.script.run.withSuccessHandler(loadEstadoCivil).comboEstadoCivil();
         google.script.run.withSuccessHandler(loadDepartamento).comboDepartamento();
         google.script.run.withSuccessHandler(loadDatosPersonales).DatosPersonales();
         google.script.run.withSuccessHandler(loadPaisEd).comboPais();
         google.script.run.withSuccessHandler(loadUniversidad).comboUniversidad();
         google.script.run.withSuccessHandler(loadGradoEst).comboGradoEst();
         google.script.run.withSuccessHandler(loadPaisCer).comboPais();
         google.script.run.withSuccessHandler(loadIdioma).comboIdioma();
         google.script.run.withSuccessHandler(loadIdiomaCer).comboIdioma();
         google.script.run.withSuccessHandler(loadPaisCerIdi).comboPais();
          google.script.run.withSuccessHandler(loadTipoIdiomaCer).comboTipoIdioma();
         google.script.run.withSuccessHandler(loadComboSector).comboSector();
          google.script.run.withSuccessHandler(loadTipoDocFam).comboTipoDoc();
          
          setTimeout(function(){
            var id = document.getElementById('idpe').value;
            if(id=='')
            {
              $("#divInicio").show();
              $("#divPrincipal").hide();
            }
            google.script.run.withSuccessHandler(loadEdSuperior).loadEdSuperior(id);
             google.script.run.withSuccessHandler(loadCert).loadCert(id);
            google.script.run.withSuccessHandler(loadPerIdioma).loadPerIdioma(id);
             google.script.run.withSuccessHandler(loadCerIdioma).loadCerIdioma(id);
             google.script.run.withSuccessHandler(loadExpLab).loadExpLab(id);
              google.script.run.withSuccessHandler(loadFam).loadFam(id);
              google.script.run.withSuccessHandler(loadEmerg).loadEmerg(id);
             
          }, 6000);
         
          
         
         
         //cargar adds
           waitingDialog.show('Loading Data');
           setTimeout(function () {waitingDialog.hide();}, 7000);
    
  }
  
/*--------------------------------------codigo--------------------------------------*/
/*--------------------------------------codigo--------------------------------------*/
/*--------------------------------------codigo--------------------------------------*/
/*--------------------------------------codigo--------------------------------------*/
/*--------------------------------------codigo--------------------------------------*/





function saveAll()
{
  actualizarPersona()
  waitingDialog.show('Saving Data');
  setTimeout(function () {waitingDialog.hide();  lload();}, 3000);
  

}



 

function addCuenta()
{
   
}


function addEdSuperior()
{
   var TITULO = document.getElementById('edtitulo').value;
   var UNIVERSIDADFK = document.getElementById('eduniversidad').value;
   var OTRAUNIVERSIDAD = document.getElementById('edotrauniversidad').value;
   var GRADOFK = document.getElementById('edgrado').value;
   var PAISFK = document.getElementById('edpais').value;
   var FINICIO = document.getElementById('edfinicio').value;
   var FFIN = document.getElementById('edffin').value;
   var PERSONAFK = document.getElementById('idpe').value;

    google.script.run.insertEdSuperior(TITULO,UNIVERSIDADFK,OTRAUNIVERSIDAD,GRADOFK,PAISFK,FINICIO,FFIN,PERSONAFK);
     setTimeout(function(){
            var id = document.getElementById('idpe').value;
            google.script.run.withSuccessHandler(loadEdSuperior).loadEdSuperior(id);
          }, 1500);
}


function addCurso()
{
    var TIPO = document.getElementById('certipo').value;
    var NOMBRE = document.getElementById('cernombre').value;
    var INSTITUCION = document.getElementById('cerinst').value;
    var PAISFK = document.getElementById('cerpais').value;
    var FEXPED = document.getElementById('cerfexp').value;
    var FVENC = document.getElementById('cerfvenc').value;
    var PERSONAFK = document.getElementById('idpe').value;

    google.script.run.insertCert(TIPO,NOMBRE,INSTITUCION,PAISFK,FEXPED,FVENC,PERSONAFK);
    
      setTimeout(function(){
            var id = document.getElementById('idpe').value;
             google.script.run.withSuccessHandler(loadCert).loadCert(id);
          }, 1500);
         
}


function addIdioma()
{

    var  IDIOMAFK = document.getElementById('idinombre').value;
    var  NHABLADO = document.getElementById('idinh').value;
    var  NESCRITO = document.getElementById('idine').value;
    var  NLECTURA = document.getElementById('idinl').value;
    var PERSONAFK = document.getElementById('idpe').value;
    
     google.script.run.insertPerIdioma(IDIOMAFK,NHABLADO,NESCRITO,NLECTURA,PERSONAFK);
     
       setTimeout(function(){
            var id = document.getElementById('idpe').value;
            
            google.script.run.withSuccessHandler(loadPerIdioma).loadPerIdioma(id);
          }, 1500);
}


function addCursoIdioma()
{
   var IDIOMAFK = document.getElementById('ceridinombre').value;
   var TIPOCERTIDIOMAFK = document.getElementById('ceriditipo').value;
   var PAISFK = document.getElementById('ceridipais').value;
   var INSTITUCION = document.getElementById('ceridiinst').value;
   var FEXPED = document.getElementById('ceridifexp').value;
   var FVENC = document.getElementById('ceridifvenc').value;
   var PERSONAFK = document.getElementById('idpe').value;
   
    google.script.run.insertCerIdioma(IDIOMAFK,TIPOCERTIDIOMAFK,PAISFK,INSTITUCION,FEXPED,FVENC,PERSONAFK);   
    setTimeout(function(){
            var id = document.getElementById('idpe').value;
            google.script.run.withSuccessHandler(loadCerIdioma).loadCerIdioma(id);
          }, 1500);
}


function addExpLaboral()
{
   var PERSONAFK = document.getElementById('idpe').value;
   var PUESTO = document.getElementById('exppuesto').value;
   var EMPRESA = document.getElementById('expempresa').value;
   var SECTORFK = document.getElementById('expsector').value;
   var PROYECTO = document.getElementById('expproyecto').value;
   var FINICIO = document.getElementById('expfinicio').value;
   var FFIN = document.getElementById('expffin').value;
   var LABORES = document.getElementById('explabores').value;


   google.script.run.insertExpLab(PUESTO,EMPRESA,SECTORFK,PROYECTO,FINICIO,FFIN,LABORES,PERSONAFK);
   
    setTimeout(function(){
            var id = document.getElementById('idpe').value;
            google.script.run.withSuccessHandler(loadExpLab).loadExpLab(id);
          }, 1500);
}


function addHijos()
{

   var PERSONAFK = document.getElementById('idpe').value;
   var TIPO = document.getElementById('famtipo').value;
   var NOMBRE = document.getElementById('famnombre').value;
   var PATERNO = document.getElementById('fampaterno').value;
   var MATERNO = document.getElementById('fammaterno').value;
   var SEXO = document.getElementById('famsexo').value;
   var TIPO_DOCUMENTOFK = document.getElementById('famtipodoc').value;
   var NUMERODOC = document.getElementById('famnumerodoc').value;
   var FNAC = document.getElementById('famfnacimiento').value;
   
   google.script.run.insertFam(TIPO,NOMBRE,PATERNO,MATERNO,SEXO,TIPO_DOCUMENTOFK,NUMERODOC,FNAC,PERSONAFK);
   
    setTimeout(function(){
            var id = document.getElementById('idpe').value;
             google.script.run.withSuccessHandler(loadFam).loadFam(id);
          }, 1500);
}


function addEmerg()
{
    var PERSONAFK = document.getElementById('idpe').value;
    var NOMBRE = document.getElementById('emernombre').value;
    var PATERNO = document.getElementById('emerpaterno').value;
    var MATERNO = document.getElementById('emermaterno').value;
    var FIJO = document.getElementById('emerfijo').value;
    var CELULAR = document.getElementById('emercel').value;
    var CORREO = document.getElementById('emercorreo').value;
    var PARENTESCO = document.getElementById('emerparen').value;

   
    google.script.run.insertEmerg(NOMBRE,PATERNO,MATERNO,FIJO,CELULAR,CORREO,PARENTESCO,PERSONAFK);
    
     setTimeout(function(){
            var id = document.getElementById('idpe').value;
             google.script.run.withSuccessHandler(loadEmerg).loadEmerg(id);
          }, 1500);
}






/*--------------------------------------------------------COMBOS DATOS PERSONALES--------------------------------------------------*/
      
function loadUniversidad(data)
      {  var slcot = document.getElementById('eduniversidad');
      slcot.innerHTML = "";
         var str ='';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; }
         
function loadPaisEd(data)
      {  
      
      var slcot = document.getElementById('edpais');
      slcot.innerHTML = "";
         var str ='';
         for(var i = 0; i < data.length;i++)
              {
              if(data[i][0]=='9589')
              {
               str = str+'<option selected="selected" value = "'+data[i][0]+'">'+data[i][1]+'</option>';
              }else{
              str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';}
            ;}
         slcot.innerHTML = str; 
         
         }
function loadPaisCer(data)
      {  
      
      var slcot = document.getElementById('cerpais');
      slcot.innerHTML = "";
         var str ='';
         for(var i = 0; i < data.length;i++)
              {
              if(data[i][0]=='9589')
              {
               str = str+'<option selected="selected" value = "'+data[i][0]+'">'+data[i][1]+'</option>';
              }else{
              str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';}
            ;}
         slcot.innerHTML = str; 
         
         }         
         
function loadPaisCerIdi(data)
      {  
      
      var slcot = document.getElementById('ceridipais');
      slcot.innerHTML = "";
         var str ='';
         for(var i = 0; i < data.length;i++)
              {
              if(data[i][0]=='9589')
              {
               str = str+'<option selected="selected" value = "'+data[i][0]+'">'+data[i][1]+'</option>';
              }else{
              str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';}
            ;}
         slcot.innerHTML = str; 
         
         }  


function loadGradoEst(data)
      {  var slcot = document.getElementById('edgrado');
      slcot.innerHTML = "";
         var str ='';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; }
         
function loadIdioma(data)
      {  var slcot = document.getElementById('idinombre');
      slcot.innerHTML = "";
         var str ='';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; }


function loadIdiomaCer(data)
      {  var slcot = document.getElementById('ceridinombre');
      slcot.innerHTML = "";
         var str ='';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; }
         
         
function loadTipoIdiomaCer(data)
      {  var slcot = document.getElementById('ceriditipo');
      slcot.innerHTML = "";
         var str ='';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; }



function loadComboSector(data)
      {  var slcot = document.getElementById('expsector');
      slcot.innerHTML = "";
         var str ='<option value = "0">Select</option>';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>'}
         slcot.innerHTML = str; }




function loadCargo(data)
      {  var slcot = document.getElementById('cape');
      slcot.innerHTML = "";
         var str ='<option value = "0">SELECT</option>';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; }
         


function loadTipoDoc(data)
      {  var slcot = document.getElementById('tido');
      slcot.innerHTML = "";
         var str ='<option value = "0">SELECT</option>';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; }
         
         
function loadTipoDocFam(data)
      {  var slcot = document.getElementById('famtipodoc');
      slcot.innerHTML = "";
         var str ='<option value = "0">SELECT</option>';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; }
 
function loadEstadoCivil(data)
      {  var slcot = document.getElementById('escipe');
      slcot.innerHTML = "";
         var str ='<option value = "0">SELECT</option>';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; } 

function loadPais(data)
      {  var slcot = document.getElementById('nape');
      slcot.innerHTML = "";
         var str ='<option value = "0">SELECT</option>';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; }

function loadDepartamento(data)
      {  var slcot = document.getElementById('deppe');
      
      slcot.innerHTML = "";
         var str ='<option value = "0">SELECT</option>';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>';
            ;}
         slcot.innerHTML = str; }


function loadDistrito (){
       var deppe = document.getElementById('deppe').value;
       google.script.run.withSuccessHandler(loadComboDistrito).comboDistrito(deppe);}
       
function loadComboDistrito(data)
      {  var slcot = document.getElementById('dispe');
      slcot.innerHTML = "";
         var str ='<option value = "0">Select</option>';
         for(var i = 0; i < data.length;i++)
              {str = str+'<option value = "'+data[i][0]+'">'+data[i][1]+'</option>'}
         slcot.innerHTML = str; }










function loadDatosPersonales(data)
  {
      for(var i = 0; i<data.length;i++)
        {  
          document.getElementById('idpe').value = data[i][0];
          document.getElementById('nope').value = data[i][1];
          document.getElementById('appape').value = data[i][2];
          document.getElementById('apmape').value = data[i][3];
          document.getElementById('cape').value = data[i][4];
          document.getElementById('tido').value = data[i][6];
          document.getElementById('nudo').value = data[i][7];
          document.getElementById('fenape').value = data[i][8];
          document.getElementById('escipe').value = data[i][9];
          document.getElementById('nape').value = data[i][10];
          document.getElementById('dirpe').value = data[i][11];
          document.getElementById('deppe').value = data[i][12];
          document.getElementById('dispe').value = data[i][13];
          document.getElementById('te1pe').value = data[i][14];
          document.getElementById('te2pe').value = data[i][15];
          document.getElementById('ce1pe').value = data[i][16];
          document.getElementById('ce2pe').value = data[i][17];
          document.getElementById('emape').value = data[i][18];
                  
              }
              $("#dispe").val(data[0][13]);
              $("#cape").val(data[0][4]);
              $("#tido").val(data[0][6]);
              $("#escipe").val(data[0][9]);
              $("#nape").val(data[0][10]);
              $("#deppe").val(data[0][12]);
              
      
   }

function actualizarPersona()
 {

 var CODIGO = document.getElementById('idpe').value;
 var NOMBRES = document.getElementById('nope').value;
 var PATERNO = document.getElementById('appape').value;
 var MATERNO = document.getElementById('apmape').value;
 var DOCUMENTO = document.getElementById('nudo').value;
 var DIRECCION = document.getElementById('dirpe').value;
 var TELEFONO = document.getElementById('te1pe').value;
 var IDDOC = document.getElementById('tido').value;
 var NACIMIENTO = document.getElementById('fenape').value;
 var ESTADOCIVIL = document.getElementById('escipe').value;
  var TIPO = document.getElementById('cape').value;
 
 //alert(NOMBRES+"-"+PATERNO+"-"+MATERNO+"-"+DOCUMENTO+"-"+DIRECCION+"-"+TELEFONO+"-"+IDDOC+"-"+NACIMIENTO+"-"+ESTADOCIVIL+"-"+CODIGO+"-"+TIPO);
    google.script.run.actualizarDatosPersonales(NOMBRES,PATERNO,MATERNO,DOCUMENTO,DIRECCION,TELEFONO,IDDOC,NACIMIENTO,ESTADOCIVIL,CODIGO,TIPO);
  // google.script.run.withSuccessHandler(loadDatosPersonales).DatosPersonales();
 
   
   
 }


function loadEdSuperior(data)
{
  var tb = document.getElementById('edsuperior');
     tb.innerHTML = "";
     for(var i = 0; i<data.length;i++){
    var tr = document.createElement("tr");
    tr.innerHTML = '<td style="display:none">'+data[i][0]+'</td><td>'+data[i][1]+'</td><td>'+data[i][2]+'</td><td>'+data[i][3]+'</td><td>'+data[i][4]+'</td><td>'+data[i][5]+'</td><td>'+data[i][6]+'</td><td>'+data[i][7]+'</td>'; 
    tb.appendChild(tr);
    }  
}
function loadCert(data)
{
  var tb = document.getElementById('certcursos');
     tb.innerHTML = "";
     for(var i = 0; i<data.length;i++){
    var tr = document.createElement("tr");
    tr.innerHTML = '<td style="display:none">'+data[i][0]+'</td><td>'+data[i][1]+'</td><td>'+data[i][2]+'</td><td>'+data[i][3]+'</td><td>'+data[i][4]+'</td><td>'+data[i][5]+'</td><td>'+data[i][6]+'</td>'; 
    tb.appendChild(tr);
    }  
}

function loadPerIdioma(data)
{
  var tb = document.getElementById('idiomas');
     tb.innerHTML = "";
     for(var i = 0; i<data.length;i++){
    var tr = document.createElement("tr");
    tr.innerHTML = '<td style="display:none">'+data[i][0]+'</td><td>'+data[i][1]+'</td><td>'+data[i][2]+'</td><td>'+data[i][3]+'</td><td>'+data[i][4]+'</td>'; 
    tb.appendChild(tr);
    }  
}

function loadCerIdioma(data)
{
  var tb = document.getElementById('certidioma');
     tb.innerHTML = "";
     for(var i = 0; i<data.length;i++){
    var tr = document.createElement("tr");
    tr.innerHTML = '<td style="display:none">'+data[i][0]+'</td><td>'+data[i][1]+'</td><td>'+data[i][2]+'</td><td>'+data[i][3]+'</td><td>'+data[i][4]+'</td><td>'+data[i][5]+'</td><td>'+data[i][6]+'</td>';
    tb.appendChild(tr);
    }  
}

function loadExpLab(data)
{
  var tb = document.getElementById('explaboral');
     tb.innerHTML = "";
     for(var i = 0; i<data.length;i++){
    var tr = document.createElement("tr");
    tr.innerHTML = '<td style="display:none">'+data[i][0]+'</td><td>'+data[i][1]+'</td><td>'+data[i][2]+'</td><td>'+data[i][3]+'</td><td>'+data[i][4]+'</td><td>'+data[i][5]+'</td><td>'+data[i][6]+'</td>';
    tb.appendChild(tr);
    }  
}

function loadFam(data)
{
  var tb = document.getElementById('hijos');
     tb.innerHTML = "";
     for(var i = 0; i<data.length;i++){
    var tr = document.createElement("tr");
    tr.innerHTML = '<td style="display:none">'+data[i][0]+'</td><td>'+data[i][1]+'</td><td>'+data[i][2]+'</td><td>'+data[i][3]+'</td><td>'+data[i][4]+'</td><td>'+data[i][5]+'</td><td>'+data[i][6]+'</td><td>'+data[i][7]+'</td><td>'+data[i][8]+'</td>';
    tb.appendChild(tr);
    }  
}

function loadEmerg(data)
{
  var tb = document.getElementById('emerg');
     tb.innerHTML = "";
     for(var i = 0; i<data.length;i++){
    var tr = document.createElement("tr");
    tr.innerHTML = '<td style="display:none">'+data[i][0]+'</td><td>'+data[i][1]+'</td><td>'+data[i][2]+'</td><td>'+data[i][3]+'</td><td>'+data[i][4]+'</td><td>'+data[i][5]+'</td><td>'+data[i][6]+'</td><td>'+data[i][7]+'</td>';
    tb.appendChild(tr);
    }  
}


















/*--------------------------------------------modal moda modal modal----------------------------------------------*/
/*--------------------------------------------modal moda modal modal----------------------------------------------*/
/*--------------------------------------------modal moda modal modal----------------------------------------------*/
/*--------------------------------------------modal moda modal modal----------------------------------------------*/
/*--------------------------------------------modal moda modal modal----------------------------------------------*/


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);





//-------------------------------WAITING DIALOG---------------------------------------

var waitingDialog = waitingDialog || (function ($) {
    'use strict';

	// Creating modal dialog's DOM
	var $dialog = $(
		'<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
		'<div class="modal-dialog modal-m">' +
		'<div class="modal-content">' +
			'<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
			'<div class="modal-body">' +
				'<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
			'</div>' +
		'</div></div></div>');

	return {
    
		show: function (message, options) {
			// Assigning defaults
			if (typeof options === 'undefined') {
				options = {};
			}
			if (typeof message === 'undefined') {
				message = 'Loading';
			}
			var settings = $.extend({
				dialogSize: 'm',
				progressType: '',
				onHide: null // This callback runs after the dialog was hidden
			}, options);

			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
			$dialog.find('.progress-bar').attr('class', 'progress-bar');
			if (settings.progressType) {
				$dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
			}
			$dialog.find('h3').text(message);
			// Adding callbacks
			if (typeof settings.onHide === 'function') {
				$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
					settings.onHide.call($dialog);
				});
			}
			// Opening dialog
			$dialog.modal();
		},
		/**
		 * Closes dialog
		 */
		hide: function () {
			$dialog.modal('hide');
		}
	};

})(jQuery);

</script>

