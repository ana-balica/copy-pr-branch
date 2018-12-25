// Get copy button
var copyButton = document.getElementById('copy-branch-name');

if (copyButton === null) {
  // Create a fixed positioned button on the page
  var buttonContainer = document.createElement("div");
  buttonContainer.innerHTML = `
    <div style="position: fixed; right: 3em; bottom: 3em;">
      <button type="button" class="btn btn-m btn-blue" id="copy-branch-name">
        Copy branch name
      </button>
    </div>
  `;
  document.body.appendChild(buttonContainer);
  copyButton = document.getElementById('copy-branch-name');
} else {
  // If button already exists, remove click event
  copyButton.removeEventListener('click');
}


// When button clicked, copy PR branch name
copyButton.onclick = function() {
  // Get branch name of the Pull Request
  var branchSpan = document.getElementsByClassName("commit-ref")[1].querySelector("span");
  var branchName = branchSpan.innerHTML;

  // Copy branch name to clipboard
  navigator.clipboard.writeText(branchName);
  console.log('BUTTON ON CLICK - ' + branchName);
};
