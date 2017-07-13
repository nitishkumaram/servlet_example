package com.spaneos.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class RegisterServlet
 */
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public RegisterServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		Enumeration<String> e=request.getParameterNames();
		PrintWriter pw=response.getWriter();
		pw.print("<html><head><title>Form Values</title></head>");
		pw.print("<body><h3>Values Entered are:</h3><br>");
		String hob[]=new String[3];
		while(e.hasMoreElements())
		{
			String name=e.nextElement();
			if(name.equalsIgnoreCase("Hobbies"))
			{
				hob=request.getParameterValues(name);
				for(String index:hob)
					pw.print(name+"="+index+"<br>");
			}
			else
				pw.print(name+"="+request.getParameter(name)+"<br>");
		}
		pw.print("</body></head>");
	}

}
