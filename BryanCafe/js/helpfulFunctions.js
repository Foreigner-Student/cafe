function ajaxGetXMLDocument(xmlFile)
{
    if(window.XMLHttpRequest)
    {
       xmlhttp = new XMLHttpRequest();
    }
    else
    {
       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", xmlFile, false);
    xmlhttp.send();
    return xmlhttp.responseXML;
}//function ajaxGetXMLDocument(xmlFile)

/*****************************************************************************
 * Function: createElementWithAttributes(parElement, parAttributeList)       *
 * Function Description:                                                     *
 * This function creates an element with any number of attributes            *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parElement. Element in string format. e.g. "div"                       *
 * 2. parAttributeList. Attribute(s) in json format without stringifying     *
 *    example: {"src": "myImage.jpg", class:"w-100", alt:"Image not loaded"} *
 *****************************************************************************/
function createElementWithAttributes(parElement, parAttributeList)
{
  const thisElement = document.createElement(parElement);

  for(attribute in parAttributeList){
    thisAttribute = document.createAttribute(attribute);
    thisAttribute.value = parAttributeList[attribute];
    thisElement.setAttributeNode(thisAttribute);
  }//for(attribute in parAttributeList)
  return thisElement;
}//function createElementWithAttributes(parElement, parAttributeList)

/*****************************************************************************
 * Function: createElementWithTextNode(parElement, parTextNode)              *
 * Function Description:                                                     *
 * This function creates an element with text node. example: <h1>Hello</h1>  *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parElement. Element in string format. e.g. "div"                       *
 * 2. parTextNode. Text node in string format. e.g. "Hello"                  *
 *****************************************************************************/
function createElementWithTextNode(parElement, parTextNode) {
    const thisNewElement = document.createElement(parElement);
    const thisTitleTextNode = document.createTextNode(parTextNode);
    thisNewElement.appendChild(thisTitleTextNode);
    return thisNewElement;
}//function createElementWithTextNode(parElement, parTextNode)

function createMenuItem(parMenuItemName, parHref)
{

  let thisMenuItem = createElementWithAttributes("li", {"class":"nav-item"});
                                             (parHref);
  let thisAnchorTag = createElementWithAttributes("a", {"class":"nav-link", "href":parHref});
  let thisAchorTagText = document.createTextNode(parMenuItemName);

  thisAnchorTag.appendChild(thisAchorTagText);
  thisMenuItem.appendChild(thisAnchorTag);
  return thisMenuItem;
}
