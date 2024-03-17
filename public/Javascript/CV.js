document.addEventListener("DOMContentLoaded", function() {
    const siteContainer = document.createElement('div');
    siteContainer.classList.add('site-container');

    const nav = document.createElement('ul');
    nav.id = 'nav';
    const navItems = ['Home', 'About', 'CV', 'Projects', 'Contact'];
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `/${item}.html`;
        a.textContent = item;
        li.appendChild(a);
        nav.appendChild(li);
    });

    siteContainer.appendChild(nav);

    const content = document.createElement('div');
    content.classList.add('content');

    const section = document.createElement('section');
    section.id = 'section3';

    const row = document.createElement('div');
    row.classList.add('row');

    const column1 = document.createElement('div');
        column1.classList.add('column-1');
    const educationHeader = document.createElement('h2');
            educationHeader.textContent = 'Education';
    const educationList = document.createElement('ul');
        column1.appendChild(educationHeader);
        column1.appendChild(educationList);
    const workExperienceHeader = document.createElement('h2');
            workExperienceHeader.textContent = 'Work experience';
    const workExperienceList = document.createElement('ul');
        column1.appendChild(workExperienceHeader);
        column1.appendChild(workExperienceList);
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.education.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                educationList.appendChild(li);
            });
            data.workExperience.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                workExperienceList.appendChild(li);
            });
            row.appendChild(column1);
            const column2 = document.createElement('div');
            column2.classList.add('column-2');
            column2.innerHTML = `
                <img src="/Images/IMG_20240220_170055.jpg" class="small-img" alt="Photo">
                <br>
                <h2>Information</h2>
                <ul>
                    <li>Name: Anton Larsson</li>
                    <li>Birth year: 1993</li>
                    <li>Email: anton.larsson@campus.se</li>
                    <li>Mobile: 0725231263</li>
                </ul>
                <br>
                <h2>Skills</h2>
                <ul>
                    <li>SAP</li>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>SQL</li>
                </ul>
            `;
            row.appendChild(column2);
            section.appendChild(row);
            content.appendChild(section);
            siteContainer.appendChild(content);
            document.body.appendChild(siteContainer);
        })
        .catch(error => console.error('Error fetching data:', error));
});