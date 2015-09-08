$(function() { 
	var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;	
        $("#sCualVehiculo").hide();
        $("#sCuantoSalario").hide();
        $("#sPensioSalario").hide();
        $("#sOtroIngresoCu").hide();
        $("#sCuantoIngreso").hide();
        $("#sCualTargeta").hide();
        $("#sCualCredito").hide();
        
     
        $("input[name='sVehiculo']").click(function(){
            if($("input[name='sVehiculo']:checked").val() =="S" ){
                  $("#sCualVehiculo").show();
            }
            else{
                  $("#sCualVehiculo").hide();
                }
	
        });
     
        $("input[name='sIngresoArrendamiento']").click(function(){
            if($("input[name='sIngresoArrendamiento']:checked").val() =="S" ){
                  $("#sCuantoSalario").show();
            }
            else{
                  $("#sCuantoSalario").hide();
                }
	
        });
        
        $("input[name='sIngresoPension']").click(function(){
            if($("input[name='sIngresoPension']:checked").val() =="S" ){
                  $("#sPensioSalario").show();
            }
            else{
                  $("#sPensioSalario").hide();
                }
	
        });
        
        $("input[name='sOtrosIngresos']").click(function(){
            if($("input[name='sOtrosIngresos']:checked").val() =="S" ){
                  $("#sOtroIngresoCu").show();
                  $("#sCuantoIngreso").show();
            }
            else{
                  $("#sOtroIngresoCu").hide();
                  $("#sCuantoIngreso").hide();
                }
	
        });
        
        $("input[name='sTargetaCredito']").click(function(){
            if($("input[name='sTargetaCredito']:checked").val() =="S" ){
                  $("#sCualTargeta").show();
                  
            }
            else{
                  $("#sCualTargeta").hide();
                  
                }
	
        });
        
        $("input[name='sCreditoActual']").click(function(){
            if($("input[name='sCreditoActual']:checked").val() =="S" ){
                  $("#sCualCredito").show();
            }
            else{
                  $("#sCualCredito").hide();
                }
	
        });
        
      
       $("#ValidEstu").click(function(){  
		$(".error").fadeOut().remove();
		
      /*       if ($("#TipoSolicitud").val() == "" ) {
			$("#TipoSolicitud").focus().after('<span class="error">Campo Obligatorio</span>');  
			return false; 
                }*/
                    
       /*      if ($("#Nacionalidad").val() == "" ) {
			$("#Nacionalidad").focus().after('<span class="error">Campo Obligatorio</span>');  
			return false;   
                }*/
                    
               if ($("#sLugarNac").val() == "") {  
			$("#sLugarNac").focus().after('<span class="error">Campo Obligatorio</span>');  
			return false; 
                      
                }        
        /*     if ($("#TipoIdentificacion").val() == "") {  
			$("#TipoIdentificacion").focus().after('<span class="error">Campo Obligatorio</span>');  
			return false;  
                           
                }  */
                if ($("#sLugarExped").val() == "" ) {
			$("#sLugarExped").focus().after('<span class="error">Campo Obligatorio</span>');  
			return false;  
                       
		}  
        
                if ($("#sPrimerNombre").val() == "") {  
			$("#sPrimerNombre").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
                       
		}  
                if ($("#sPrimerApellido").val() == "") {  
			$("#sPrimerApellido").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
                        
		} 
                
            /* if ($("#Genero").val() == "") {  
			$("#Genero").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}*/
                
      
            /* if ($("#paisRes").val() == "") {  
			$("#paisRes").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}  */
                
            /* if ($("#CiudadRes").val() == "") {  
			$("#CiudadRes").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}     */   
           
               if ($("#sBarrioResidencia").val() == "") {  
			$("#sBarrioResidencia").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;
                       
		}   
         
               if ($("#sNumeroLibretaMilitar").val() == "") {  
			$("#sNumeroLibretaMilitar").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;
                        
		}    
        
               if ($("#sTelefonoFijo").val() == "") {  
			$("#sTelefonoFijo").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;
                        
		}
                
               if ($("#sEmail").val() == "" || !emailreg.test($("#sEmail").val())) {  
			$("#sEmail").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;
                        
		}  
                
            /* if ($("#NivelEduc").val() == "") {  
			$("#NivelEduc").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		} */
                
               if ($("#sCiudadNacimiento").val() == "") {  
			$("#sCiudadNacimiento").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
                        
		}  
                
               if ($("#sFechaNacimiento").val() == "") {  
			$("#sFechaNacimiento").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;
                      
		}        
            
               if ($("#sNumeroIdentificacion").val() == "") {  
			$("#sNumeroIdentificacion").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
                        
		}  
                
               if ($("#sFechaExpedicionEst").val() == "") {  
			$("#sFechaExpedicionEst").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
                        
		}  
                
               if ($("#sSegundoNombre").val() == "") {  
			$("#sSegundoNombre").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
                        
		} 
                
               if ($("#sSegundoApellido").val() == "") {  
			$("#sSegundoApellido").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
                        
		}
                
             /*if ($("#CategoriaSisben").val() == "") {  
			$("#CategoriaSisben").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}   */ 
                
             /*if ($("#DepartamentoRes").val() == "") {  
			$("#DepartamentoRes").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}*/
                
               if ($("#sLocalidadResidencia").val() == "") {  
			$("#sLocalidadResidencia").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
                        
		}  
                
               if ($("#sDireccionResidencia").val() == "") {  
			$("#sDireccionResidencia").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
                       
		}        
            
               if ($("#EstadoCivil").val() == "") {  
			$("#EstadoCivil").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
                        
		}    
                
               if ($("#sTelefonoMovil").val() == "") {  
			$("#sTelefonoMovil").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
                        
		}   
                
               if ($("#GrupoSanguineo").val() == "") {  
			$("#GrupoSanguineo").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
                       
		} 
                
              
            
       //      if ($("#").val() == "") {  
			//$("#").focus().after('<span class="error">Campo Obligatorio</span>');   
			//return false;  
		//}  
     
 
                         
        });  
    
        $(".DatosAlum,#sFechaNacimiento,#sFechaExpedicionEst").keyup(function(){
        if( $(this).val() != "" ){
            $(".error").fadeOut();
            return false;
        }
    });
        
    

       ////////////////////datos acudiente///////////////////////
        
        $("#ValidAcu").click(function(){ 
               $(".error").fadeOut().remove(); 
                
               /*if ($("#TipoIdAcu").val() == "") {  
			$("#TipoIdAcu").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}*/
                     
                     
               /*if ($("#sFechaExpedicionAcu").val() == "") {  
			$("#sFechaExpedicionAcu").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}*/
                
                if ($("#sPrimerNombreA").val() == "") {  
			$("#sPrimerNombreA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                if ($("#sPrimerApellidoA").val() == "") {  
			$("#sPrimerApellidoA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                /*if ($("#PaisResidenciaA").val() == "") {  
			$("#PaisResidenciaA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}*/
                
                /*if ($("#CiudadA").val() == "") {  
			$("#CiudadA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}*/
                
                if ($("#sTelefonoFijoA").val() == "") {  
			$("#sTelefonoFijoA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                if ($("#sEmailA").val() == "" || !emailreg.test($("#sEmailA").val())) {  
			$("#sEmailA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                if ($("#sNumeroIdentificacionA").val() == "") {  
			$("#sNumeroIdentificacionA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
               /* if ($("#generoA").val() == "") {  
			$("#generoA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}*/
                
                if ($("#sSegundoNombreA").val() == "") {  
			$("#sSegundoNombreA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                if ($("#sSegundoApellidoA").val() == "") {  
			$("#sSegundoApellidoA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                /*if ($("#DepartamentoResiAc").val() == "") {  
			$("#DepartamentoResiAc").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}*/
                
                if ($("#sDireccionResidenciaA").val() == "") {  
			$("#sDireccionResidenciaA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                if ($("#sTelefonoMovilA").val() == "") {  
			$("#sTelefonoMovilA").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                ////////informacion adicional/////////
                
                if (!$("input[name='sTrabajaActual']").is(':checked')) {  
			$("#sTrabajaActual").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false; 
		 }
                
                
                
                if ($("#sTiempoContrato").val() == "") {  
			$("#sTiempoContrato").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                if ($("#sTipoContrato").val() == "") {  
			$("#sTipoContrato").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
               /* if ($("#TipoVivienda").val() == "") {  
			$("#TipoVivienda").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}*/
                
                if (!$("input[name='sVehiculo']").is(':checked')) {  
			$("#sVehiculo").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
                        
		}
                
                if (!$("input[name='sIngresoArrendamiento']").is(':checked')) {  
			$("#sIngresoArrendamiento").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
               
		}
                
               if (!$("input[name='sIngresoPension']").is(':checked')) {  
			$("#sIngresoPension").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
                 
		}
                
               if (!$("input[name='sOtrosIngresos']").is(':checked')) {  
			$("#sOtrosIngresos").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
                    
		}
                
               if (!$("input[name='sTargetaCredito']").is(':checked')) {  
			$("#sTargetaCredito").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
                  
		}
                
               if (!$("input[name='sCreditoActual']").is(':checked')) {  
			$("#sCreditoActual").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
                        
		}
                
                if ($("#sTipoContrato").val() == "") {  
			$("#sTipoContrato").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                if (!$("input[name='sEmpleado']").is(':checked')) {  
			$("#sEmpleado").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
                        
		}
                
                if ($("#sNombreEmp").val() == "") {  
			$("#sNombreEmp").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                if ($("#sOcupacion").val() == "") {  
			$("#sOcupacion").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                if ($("#sSalario").val() == "") {  
			$("#sSalario").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
       
               if ($("#ConocimientoEdupol").val() == "") {  
			$("#ConocimientoEdupol").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
               
                
               /* if ($("#").val() == "") {  
			$("#").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}*/
                
      
       });
       
      
    
        
        $(".DatosAcud,sFechaExpedicionAcu").keyup(function(){
            if( $(this).val() != "" ){
                 $(".error").fadeOut();
            return false;
        }
    });
	/////////////////////Datos academicos/////////////////////////////
        $("#enviar").click(function(){
            $(".error").fadeOut().remove(); 
            
            if ($("#PaisEStudiar").val() == "") {  
			$("#PaisEStudiar").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
            if ($("#CiudadEStudiar").val() == "") {  
			$("#CiudadEStudiar").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
            if ($("#Universidad").val() == "") {  
			$("#Universidad").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}    
                
            if ($("#TipoEStudio").val() == "") {  
			$("#TipoEStudio").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}    
            
            if ($("#DepEstudio").val() == "") {  
			$("#DepEstudio").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
            if ($("#CentrosAsociados").val() == "") {  
			$("#CentrosAsociados").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
            if ($("#NivelFormacion").val() == "") {  
			$("#NivelFormacion").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
            if ($("#ProgramaAcademico").val() == "") {  
			$("#ProgramaAcademico").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
            if ($("#EstratoAc").val() == "") {  
			$("#EstratoAc").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
             if ($("#ConocimientoEdupol").val() == "") {  
			$("#ConocimientoEdupol").focus().after('<span class="error">Campo Obligatorio</span>');   
			return false;  
		}
                
                
        });
        
        
     
        
});