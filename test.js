if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "certificado_libertad_de_gravamen")) {
    simpleVariables.modify("docreNombrecertificado_libertad_de_gravamen", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "certificado_libertad_de_gravamen")[0].get("nombre"));
    simpleVariables.modify("docreComentariocertificado_libertad_de_gravamen", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "certificado_libertad_de_gravamen")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "titulo_de_propiedad")) {
    simpleVariables.modify("docreNombretitulo_de_propiedad", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "titulo_de_propiedad")[0].get("nombre"));
    simpleVariables.modify("docreComentariotitulo_de_propiedad", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "titulo_de_propiedad")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "predial_otro_propietario")) {
    simpleVariables.modify("docreNombrepredial_otro_propietario", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "predial_otro_propietario")[0].get("nombre"));
    simpleVariables.modify("docreComentariopredial_otro_propietario", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "predial_otro_propietario")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "aviso_clg")) {
    simpleVariables.modify("docreNombreaviso_clg", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "aviso_clg")[0].get("nombre"));
    simpleVariables.modify("docreComentarioaviso_clg", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "aviso_clg")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "avaluo_propio")) {
    simpleVariables.modify("docreNombreavaluo_propio", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "avaluo_propio")[0].get("nombre"));
    simpleVariables.modify("docreComentarioavaluo_propio", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "avaluo_propio")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "testimonio_poder_tuhabi")) {
    simpleVariables.modify("docreNombretestimonio_poder_tuhabi", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "testimonio_poder_tuhabi")[0].get("nombre"));
    simpleVariables.modify("docreComentariotestimonio_poder_tuhabi", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "testimonio_poder_tuhabi")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "boleta_predial")) {
    simpleVariables.modify("docreNombreboleta_predial", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "boleta_predial")[0].get("nombre"));
    simpleVariables.modify("docreComentarioboleta_predial", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "boleta_predial")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "boleta_agua")) {
    simpleVariables.modify("docreNombreboleta_agua", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "boleta_agua")[0].get("nombre"));
    simpleVariables.modify("docreComentarioboleta_agua", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "boleta_agua")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "alineamiento_y_numero_oficial")) {
    simpleVariables.modify("docreNombrealineamiento_y_numero_oficial", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "alineamiento_y_numero_oficial")[0].get("nombre"));
    simpleVariables.modify("docreComentarioalineamiento_y_numero_oficial", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "alineamiento_y_numero_oficialalineamiento_y_numero_oficial")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "solicitud_clg")) {
    simpleVariables.modify("docreNombresolicitud_clg", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "solicitud_clg")[0].get("nombre"));
    simpleVariables.modify("docreComentariosolicitud_clg", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "solicitud_clg")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "constancia_de_uso_de_suelo")) {
    simpleVariables.modify("docreNombreconstancia_de_uso_de_suelo", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "constancia_de_uso_de_suelo")[0].get("nombre"));
    simpleVariables.modify("docreComentarioconstancia_de_uso_de_suelo", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "constancia_de_uso_de_suelo")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "avaluo_bancario")) {
    simpleVariables.modify("docreNombreavaluo_bancario", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "avaluo_bancario")[0].get("nombre"));
    simpleVariables.modify("docreComentarioavaluo_bancario", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "avaluo_bancario")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "constitucion_regimen_de_propiedad_en_condominio")) {
    simpleVariables.modify("docreNombreconstitucion_regimen_de_propiedad_en_condominio", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "constitucion_regimen_de_propiedad_en_condominio")[0].get("nombre"));
    simpleVariables.modify("docreComentarioconstitucion_regimen_de_propiedad_en_condominio", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "constitucion_regimen_de_propiedad_en_condominio")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "boleta_de_ingreso_al_rppyc_constancia")) {
    simpleVariables.modify("docreNombreboleta_de_ingreso_al_rppyc_constancia", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "boleta_de_ingreso_al_rppyc_constancia")[0].get("nombre"));
    simpleVariables.modify("docreComentarioboleta_de_ingreso_al_rppyc_constancia", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "boleta_de_ingreso_al_rppyc_constancia")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "reglamento_condominos")) {
    simpleVariables.modify("docreNombrereglamento_condominos", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "reglamento_condominos")[0].get("nombre"));
    simpleVariables.modify("docreComentarioreglamento_condominos", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "reglamento_condominos")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "certificado_zonificacion")) {
    simpleVariables.modify("docreNombrecertificado_zonificacion", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "certificado_zonificacion")[0].get("nombre"));
    simpleVariables.modify("docreComentariocertificado_zonificacion", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "certificado_zonificacion")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "estado_de_cuenta_vendedor")) {
    simpleVariables.modify("docreNombreestado_de_cuenta_vendedor", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "estado_de_cuenta_vendedor")[0].get("nombre"));
    simpleVariables.modify("docreComentarioestado_de_cuenta_vendedor", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "estado_de_cuenta_vendedor")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "doc_excepcion")) {
    simpleVariables.modify("docreNombredoc_excepcion", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "doc_excepcion")[0].get("nombre"));
    simpleVariables.modify("docreComentariodoc_excepcion", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "doc_excepcion")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "sucesion_testamentaria")) {
    simpleVariables.modify("docreNombresucesion_testamentaria", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "sucesion_testamentaria")[0].get("nombre"));
    simpleVariables.modify("docreComentariosucesion_testamentaria", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "sucesion_testamentaria")[0].get("comentario"));
}
if (ArrayDocumentosRechazados.some(doc => doc.get("nombre") == "derecho_de_tanto")) {
    simpleVariables.modify("docreNombrederecho_de_tanto", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "derecho_de_tanto")[0].get("nombre"));
    simpleVariables.modify("docreComentarioderecho_de_tanto", ArrayDocumentosRechazados.filter(doc => doc.get("nombre") == "derecho_de_tanto")[0].get("comentario"));
}