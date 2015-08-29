 
package com.ethos.control.general;

import com.ethos.DAO.AbstractDAO;
import com.ethos.DAO.TipoSolicitudDAO;
import com.ethos.business.general.ActualizarDatos;
import com.ethos.model.ActualizaModel;
import com.ethos.model.EstadoCivilModel;
import com.ethos.model.TipoSolicitudModel;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Mary
 */


public class PreRegistroControl extends HttpServlet {
    private ActualizarDatos actualizaDatos;
    AbstractDAO tipoSolicitudDao;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
  

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       HttpSession sesion = request.getSession();
        String json = "";
        tipoSolicitudDao=new TipoSolicitudDAO();
        List<TipoSolicitudModel> listTipoSolicitud;
        

        try {
//            System.out.println("idUser: "+sesion.getAttribute("codUser").toString());
            if (sesion.getAttribute("codUser") != null) {
                listTipoSolicitud=tipoSolicitudDao.findAll();
                json = new Gson().toJson(listTipoSolicitud);
            }
                  System.out.println("json preregistro: " + json);
        } catch (Exception e) {
            System.out.println("Exception in AuctalizarControl: " + e);
        }
        response.setContentType("application/json;charset=Utf-8");
        response.getWriter().write(json);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
