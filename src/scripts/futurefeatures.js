(function addDeleteFn(doc)
{
    const delBtns = document.querySelectorAll("[del-project-index]");
    console.log(delBtns);

    delBtns.forEach(element => {
        const projectIndex = element.getAttribute('del-project-index');
        element.addEventListener("click", (e)=>{
            e.stopImmediatePropagation();
            ProjectManager.deleteProject(projectIndex);
            console.log(ProjectManager.getAllProjects());
            const domEle = document.querySelector(`[project-index = "${projectIndex}"]`);
            domEle.remove();
        })
    });
})(document);