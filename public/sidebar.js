// Function to make the tooltip appear
function createTip(ev) {
    this.title = '';
    name = this.className.split(' ')[1]
    var title = name.charAt(0).toUpperCase() + name.slice(1)
    if (title == 'Dist_work') {
        title = "Distance to work"
    }
    this.setAttribute("tooltip", name);
    var tooltipWrap = document.createElement("div"); //creates div
    tooltipWrap.className = 'tooltip'; //adds class
    tooltipWrap.appendChild(document.createTextNode(title)); //add the text node to the newly created div.

    var firstChild = document.body.firstChild; //gets the first elem after body
    firstChild.parentNode.insertBefore(tooltipWrap, firstChild); //adds tt before elem 
    var padding = 5;
    var linkProps = this.getBoundingClientRect();
    var tooltipProps = tooltipWrap.getBoundingClientRect();
    var topPos = linkProps.top - (tooltipProps.height + padding);
    tooltipWrap.setAttribute('style', 'top:' + topPos + 'px;' + 'left:' + (linkProps.left - 20) + 'px;');

}
// Function to make the tooltip disappear
function cancelTip(ev) {
    var title = this.getAttribute("tooltip");
    this.title = title;
    this.removeAttribute("tooltip");
    document.querySelector(".tooltip").remove();
}

function init_sidebar(window, document) {
    "use strict";
    var i, sections, toggle;
    // Get all individual elements of the stacked bar graph
    // Get sidebar
    toggle = document.getElementById('toggle_sidebar');
    // On click, change icon and move panel in and out
    toggle.onclick = function () {
        var open, close, sidebar, state, inv_state, left;
        open = document.getElementById('open_sidebar');
        close = document.getElementById('close_sidebar');
        sidebar = document.getElementById('sidebar');
        state = window.getComputedStyle(open).getPropertyValue("opacity");
        inv_state = state == 1 ? 0 : 1;
        left = state == 1 ? '0' : '-522px';
        open.style.opacity = inv_state;
        close.style.opacity = state;
        sidebar.style.left = left;
    };
}

function add_neighborhood(title, weights) {
    console.log("inside func")

    var html_data = `
            <dd class="stacked-bar-graph"><span class="text">NEIGHBORHOOD</span>
                <span style="width:15%"></span>
                <span style="width:OUTDOORS%" class="bar outdoors"></span>
                <span style="width:NIGHTLIFE%" class="bar nightlife"></span>
                <span style="width:RESTAURANT%" class="bar restaurants"></span>
                <span style="width:WORK%" class="bar dist_work"></span>
            </dd>
    `;
    html_data = html_data.replace('NEIGHBORHOOD', title);
    html_data = html_data.replace('OUTDOORS', (weights['outdoors'] * 0.65));
    html_data = html_data.replace('NIGHTLIFE', (weights['nightlife'] * 0.65));
    html_data = html_data.replace('RESTAURANT', (weights['restaurants'] * 0.65));
    html_data = html_data.replace('WORK', (weights['work'] * 0.75));
    document.getElementById("neighborhood_list").innerHTML += html_data;
    var sections = document.getElementsByClassName('bar');
    // iterate through all and assign tooltip on hover
    for (i = 0; i < sections.length; i = i + 1) {
        sections[i].addEventListener('mouseover', createTip);
        sections[i].addEventListener('mouseout', cancelTip);
    }
}
