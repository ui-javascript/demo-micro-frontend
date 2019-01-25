### Options
<table class="options" border="1">
  <tbody><tr>
    <th>Option</th><th>Default</th><th>Description</th>
	</tr>	<tr class="odd">
    <td><code>activeCursor</code></td>
    <td><code>""pointer""</code></td>
    <td>The <a href="http://www.w3.org/TR/CSS21/ui.html#propdef-cursor" target="_blank">CSS cursor type</a> to use when the mouse is over a tag.</td>
	</tr>	<tr>
    <td><code>animTiming</code></td>
    <td><code>"Smooth"</code></td>
    <td>The animation timing function for use with the RotateTag and TagToFront functions. The values available are "Smooth" and "Linear".</td>
	</tr>	<tr class="odd">
    <td><code>bgColour</code></td>
    <td><code class="keyword">null</code></td>
    <td>Background colour of tag, <code>null</code> for no background. The string <code>"tag"</code> means use the original link background colour.</td>
	</tr>	<tr>
    <td><code>bgOutline</code></td>
    <td><code class="keyword">null</code></td>
    <td>Colour of tag background outline. Use <code>null</code> for the same as the text colour, use <code>"tag"</code> for the original link text colour.</td>
	</tr>	<tr class="odd">
    <td><code>bgOutlineThickness</code></td>
    <td><code>0</code></td>
    <td>Thickness of tag background outline in pixels, 0 for no outline.</td>
	</tr>	<tr>
    <td><code>bgRadius</code></td>
    <td><code>0</code></td>
    <td>Radius for rounded corners of background in pixels.</td>
	</tr>	<tr class="odd">
    <td><code>centreFunc</code></td>
    <td><code class="keyword">null</code></td>
    <td>Function for drawing in centre of cloud. The function is passed in these parameters in order: canvas 2D context; canvas width; canvas height; centre X; centre Y. See the <a href="tagcanvas-centre.php">centre callback function</a> page for details.</td>
	</tr>	<tr>
    <td><code>centreImage</code></td>
    <td><code class="keyword">null</code></td>
    <td>Image to draw at centre of cloud. Uses a built-in <code>centreFunc</code> callback function to draw the image at full size in the middle of the canvas.</td>
	</tr>	<tr class="odd">
    <td><code>clickToFront</code></td>
    <td><code class="keyword">null</code></td>
    <td>If set to a number, the selected tag will move to the front in this many milliseconds before activating.</td>
	</tr>	<tr>
    <td><code>decel</code></td>
    <td><code>0.95</code></td>
    <td>Deceleration rate when mouse leaves canvas.</td>
	</tr>	<tr class="odd">
    <td><code>depth</code></td>
    <td><code>0.5</code></td>
    <td>Controls the perspective (0.0-1.0)</td>
	</tr>	<tr>
    <td><code>dragControl</code></td>
    <td><code class="keyword">false</code></td>
    <td>When enabled, cloud moves when dragged instead of based on mouse position.</td>
	</tr>	<tr class="odd">
    <td><code>dragThreshold</code></td>
    <td><code>4</code></td>
    <td>The number of pixels that the cursor must move to count as a drag instead of a click.</td>
	</tr>	<tr>
    <td><code>fadeIn</code></td>
    <td><code>0</code></td>
    <td>Time to fade in tags at start, in milliseconds.</td>
	</tr>	<tr class="odd">
    <td><code>freezeActive</code></td>
    <td><code class="keyword">false</code></td>
    <td>Set to <code>true</code> to pause movement when a tag is highlighted.</td>
	</tr>	<tr>
    <td><code>freezeDecel</code></td>
    <td><code class="keyword">false</code></td>
    <td>Set to <code>true</code> to decelerate when highlighted tags freeze instead of stopping suddenly.</td>
	</tr>	<tr class="odd">
    <td><code>frontSelect</code></td>
    <td><code class="keyword">false</code></td>
    <td>Set to <code>true</code> to prevent selection of tags at back of cloud.</td>
	</tr>	<tr>
    <td><code>hideTags</code></td>
    <td><code class="keyword">true</code></td>
    <td>Set to <code>true</code> to automatically hide the tag list element if TagCanvas is started successfully.</td>
	</tr>	<tr class="odd">
    <td><code>imageAlign</code></td>
    <td><code>""centre""</code></td>
    <td>Horizontal image alignment, one of “centre”, “left” or “right”.</td>
	</tr>	<tr>
    <td><code>imageMode</code></td>
    <td><code class="keyword">null</code></td>
    <td>What to display when tag contains images and text.
  <dl>
    <dt>null</dt><dd>Image if present, otherwise text.</dd>
    <dt>image</dt><dd>Image tags only.</dd>
    <dt>text</dt><dd>Text tags only.</dd>
    <dt>both</dt><dd>Image and text on tag using <code>imagePosition</code>.</dd>
  </dl></td>
	</tr>	<tr class="odd">
    <td><code>imagePadding</code></td>
    <td><code>2</code></td>
    <td>Distance between image and text when using an <code>imageMode</code> of “both”.</td>
	</tr>	<tr>
    <td><code>imagePosition</code></td>
    <td><code>""left""</code></td>
    <td>Position of image relative to text when using an <code>imageMode</code> of “both”. Options are “left”, “right”, “top“ or “bottom”.</td>
	</tr>	<tr class="odd">
    <td><code>imageRadius</code></td>
    <td><code>0</code></td>
    <td>Radius for image corners, in pixels. Also supports using a percentage which must be enclosed in a string, e.g. <code>"20%"</code>.</td>
	</tr>	<tr>
    <td><code>imageScale</code></td>
    <td><code>1</code></td>
    <td>Amount to scale images by - the default of 1 uses the size they appear on the page. For no scaling (use the actual image size) set this to <code>null</code>.</td>
	</tr>	<tr class="odd">
    <td><code>imageVAlign</code></td>
    <td><code>""middle""</code></td>
    <td>Vertical image alignment, one of “middle”, “top” or “bottom”.</td>
	</tr>	<tr>
    <td><code>initial</code></td>
    <td><code class="keyword">null</code></td>
    <td>Starting rotation speed, with horizontal and vertical values as an array, e.g. <code>[0.8,-0.3]</code>. Values are multiplied by <code>maxSpeed</code>.</td>
	</tr>	<tr class="odd">
    <td><code>interval</code><sup><a href="#interval-timer">[1]</a></sup></td>
    <td><code>20</code></td>
    <td>Interval between animation frames, in milliseconds.</td>
	</tr>	<tr>
    <td><code>lock</code></td>
    <td><code class="keyword">null</code></td>
    <td>Limits rotation of the cloud using the mouse. A value of <code>"x"</code>
  limits rotation to the x-axis, <code>"y"</code> limits rotation to the
  y-axis. A value of <code>"xy"</code> will prevent the cloud rotating in
  response to the mouse - the cloud will only move if the <code>initial</code>
  option is used to give it a starting speed.</td>
	</tr>	<tr class="odd">
    <td><code>maxBrightness</code></td>
    <td><code>1.0</code></td>
    <td>Brightness (opacity) of tags at front of cloud (0.0-1.0).</td>
	</tr>	<tr>
    <td><code>maxSpeed</code></td>
    <td><code>0.05</code></td>
    <td>Maximum speed of rotation.</td>
	</tr>	<tr class="odd">
    <td><code>minBrightness</code></td>
    <td><code>0.1</code></td>
    <td>Brightness (opacity) of tags at back of cloud (0.0-1.0).</td>
	</tr>	<tr>
    <td><code>minSpeed</code></td>
    <td><code>0.0</code></td>
    <td>Minimum speed of rotation when mouse leaves canvas.</td>
	</tr>	<tr class="odd">
    <td><code>minTags</code></td>
    <td><code>0</code></td>
    <td>The minimum number of tags to show in the cloud. If the number of links available is lower than this value, the list will be repeated. The maximum supported value is 200. The <code>repeatTags</code> option takes precedence over <code>minTags</code>.</td>
	</tr>	<tr>
    <td><code>noMouse</code></td>
    <td><code class="keyword">false</code></td>
    <td>Set to <code>true</code> to prevent any mouse interaction. The <code>initial</code> option must be used to animate the cloud, otherwise it will be motionless.</td>
	</tr>	<tr class="odd">
    <td><code>noSelect</code></td>
    <td><code class="keyword">false</code></td>
    <td>Set to <code>true</code> to prevent the selection of tags.</td>
	</tr>	<tr>
    <td><code>noTagsMessage</code></td>
    <td><code class="keyword">true</code></td>
    <td>Displays “No tags” instead of an empty canvas when there are no tags available.</td>
	</tr>	<tr class="odd">
    <td><code>offsetX</code></td>
    <td><code>0</code></td>
    <td>Offsets the centre of the cloud horizontally (measured in pixels)</td>
	</tr>	<tr>
    <td><code>offsetY</code></td>
    <td><code>0</code></td>
    <td>Offsets the centre of the cloud vertically (measured in pixels)</td>
	</tr>	<tr class="odd">
    <td><code>outlineColour</code></td>
    <td><code>""#ffff99""</code></td>
    <td>Colour of the active tag highlight. This can be a colour to use for all tags, or one of these options to set the colour differently for each tag:
  <dl><dt>tag</dt>
    <dd>Use the text colour from the original tag link</dd>
    <dt>tagbg</dt>
    <dd>Use the background colour from the original tag link</dd>
  </dl>
  See also the “outline” <code>weightMode</code> for another way to set the highlight colour.</td>
	</tr>	<tr>
    <td><code>outlineDash</code></td>
    <td><code>0</code></td>
    <td>Size of marching ants dash for outline/classic highlights, 0 for no dashes</td>
	</tr>	<tr class="odd">
    <td><code>outlineDashSpace</code></td>
    <td><code>0</code></td>
    <td>Size of space between marching ants dashes, 0 for same as <code>outlineDash</code></td>
	</tr>	<tr>
    <td><code>outlineDashSpeed</code></td>
    <td><code>1</code></td>
    <td>Speed of marching ants animation, 0 for no movement, negative for reverse</td>
	</tr>	<tr class="odd">
    <td><code>outlineIncrease</code></td>
    <td><code>4</code></td>
    <td>Number of pixels to increase size of tag by for the “size” outline method. Negative values are supported for decreasing the size.</td>
	</tr>	<tr>
    <td><code>outlineMethod</code></td>
    <td><code>""outline""</code></td>
    <td>Type of highlight to use. Options are:
  <dl><dt>outline</dt>
    <dd>An outline at the same depth as the active tag.</dd>
    <dt>classic</dt>
    <dd>Old-style outline on top of all tags.</dd>
    <dt>block</dt>
    <dd>Solid block of colour around the active tag.</dd>
    <dt>colour</dt>
    <dd>Changes the colour of the text or image of the current tag to the <code>outlineColour</code> value.</dd>
    <dt>size</dt>
    <dd>Increases the size of the tag, using the <code>outlineIncrease</code> option for the amount.</dd>
    <dt>none</dt>
    <dd>No highlighting at all.</dd>
  </dl></td>
	</tr>	<tr class="odd">
    <td><code>outlineOffset</code></td>
    <td><code>5</code></td>
    <td>Distance of outline from text, in pixels. This also increases the size of the active area around the tag.</td>
	</tr>	<tr>
    <td><code>outlineRadius</code></td>
    <td><code>0</code></td>
    <td>Radius for rounded corners on outline box in pixels</td>
	</tr>	<tr class="odd">
    <td><code>outlineThickness</code></td>
    <td><code>2</code></td>
    <td>Thickness of outline in pixels</td>
	</tr>	<tr>
    <td><code>padding</code></td>
    <td><code>0</code></td>
    <td>Amount of space around text and inside background.</td>
	</tr>	<tr class="odd">
    <td><code>pinchZoom</code></td>
    <td><code class="keyword">false</code></td>
    <td>Set to <code>true</code> to enable zooming in and out of the cloud by pinching on touchscreen devices.</td>
	</tr>	<tr>
    <td><code>pulsateTime</code></td>
    <td><code>3</code></td>
    <td>Pulse rate, in seconds per beat</td>
	</tr>	<tr class="odd">
    <td><code>pulsateTo</code></td>
    <td><code>1.0</code></td>
    <td>Pulsate outline to this opacity (0.0-1.0)</td>
	</tr>	<tr>
    <td><code>radiusX</code></td>
    <td><code>1</code></td>
    <td>Initial size of cloud from centre to sides.</td>
	</tr>	<tr class="odd">
    <td><code>radiusY</code></td>
    <td><code>1</code></td>
    <td>Initial size of cloud from centre to top and bottom.</td>
	</tr>	<tr>
    <td><code>radiusZ</code></td>
    <td><code>1</code></td>
    <td>Initial size of cloud from centre to front and back.</td>
	</tr>	<tr class="odd">
    <td><code>repeatTags</code></td>
    <td><code>0</code></td>
    <td>The number of times to repeat the list of tags in the cloud. The maximum supported value is 64. This option overrides the <code>minTags</code> option.</td>
	</tr>	<tr>
    <td><code>reverse</code></td>
    <td><code class="keyword">false</code></td>
    <td>Set to <code>true</code> to reverse direction of movement relative to mouse position.</td>
	</tr>	<tr class="odd">
    <td><code>scrollPause</code></td>
    <td><code>0</code></td>
    <td>Animation delay in milliseconds for when the page is being scrolled. Applies to all TagCanvas instances on the page.</td>
	</tr>	<tr>
    <td><code>shadow</code></td>
    <td><code>""#000000""</code></td>
    <td>Colour of the shadow behind each tag.</td>
	</tr>	<tr class="odd">
    <td><code>shadowBlur</code></td>
    <td><code>0</code></td>
    <td>Amount of tag shadow blurring, in pixels.</td>
	</tr>	<tr>
    <td><code>shadowOffset</code></td>
    <td><code>"[0,0]"</code></td>
    <td>X and Y offset of the tag shadow, in pixels.</td>
	</tr>	<tr class="odd">
    <td><code>shape</code></td>
    <td><code>""sphere""</code></td>
    <td>The shape of the cloud. Currently supported are <code>sphere</code>, <code>hcylinder</code> for a cylinder that starts off horizontal, <code>vcylinder</code> for a cylinder that starts off vertical, <code>hring</code> for a horizontal circle and <code>vring</code> for a vertical circle. You may also provide the name of a function to use for generating the shape. See the <a href="tagcanvas-shapes.php">TagCanvas shapes page</a> for details and examples.</td>
	</tr>	<tr>
    <td><code>shuffleTags</code></td>
    <td><code class="keyword">false</code></td>
    <td>Set to <code>true</code> to randomize the order of the tags.</td>
	</tr>	<tr class="odd">
    <td><code>splitWidth</code></td>
    <td><code>0</code></td>
    <td>If greater than 0, breaks the tag into multiple lines at word boundaries when the line would be longer than this value. Lines are automatically broken at <code>&lt;br&gt;</code> tags.</td>
	</tr>	<tr>
    <td><code>stretchX</code></td>
    <td><code>1</code></td>
    <td>Stretch or compress the cloud horizontally.</td>
	</tr>	<tr class="odd">
    <td><code>stretchY</code></td>
    <td><code>1</code></td>
    <td>Stretch or compress the cloud vertically.</td>
	</tr>	<tr>
    <td><code>textAlign</code></td>
    <td><code>""centre""</code></td>
    <td>Horizontal text alignment, one of “centre”, “left” or “right”.</td>
	</tr>	<tr class="odd">
    <td><code>textColour</code><sup><a href="#text-colour">[2]</a></sup></td>
    <td><code>""#ff99ff""</code></td>
    <td>Colour of the tag text - empty string or <code>null</code> to use the colour of the original link.</td>
	</tr>	<tr>
    <td><code>textFont</code><sup><a href="#text-colour">[2]</a></sup></td>
    <td><code>""Helvetica, Arial,<br> sans-serif""</code></td>
    <td>Font family for the tag text - empty string or <code>null</code> to use the font of the original link.</td>
	</tr>	<tr class="odd">
    <td><code>textHeight</code></td>
    <td><code>15</code></td>
    <td>Height of the tag text font (in pixels).</td>
	</tr>	<tr>
    <td><code>textVAlign</code></td>
    <td><code>""middle""</code></td>
    <td>Vertical text alignment, one of “middle”, “top” or “bottom”.</td>
	</tr>	<tr class="odd">
    <td><code>tooltip</code><sup><a href="#tooltips">[3]</a></sup></td>
    <td><code class="keyword">null</code></td>
    <td>Sets tooltip display method: <code>null</code> for no tooltips; <code>native</code> for operating system tooltips; <code>div</code> for div-based.</td>
	</tr>	<tr>
    <td><code>tooltipClass</code><sup><a href="#tooltips">[3]</a></sup></td>
    <td><code>""tctooltip""</code></td>
    <td>Class of tooltip div.</td>
	</tr>	<tr class="odd">
    <td><code>tooltipDelay</code><sup><a href="#tooltips">[3]</a></sup></td>
    <td><code>300</code></td>
    <td>Time to pause while mouse is not moving before displaying tooltip div, in milliseconds.</td>
	</tr>	<tr>
    <td><code>txtOpt</code></td>
    <td><code class="keyword">true</code></td>
    <td>Text optimisation, converts text tags to images for better performance.</td>
	</tr>	<tr class="odd">
    <td><code>txtScale</code></td>
    <td><code>2</code></td>
    <td>Scaling factor of text when converting to image in <code>txtOpt</code> mode.</td>
	</tr>	<tr>
    <td><code>weight</code><sup><a href="#weights">[4]</a></sup></td>
    <td><code class="keyword">false</code></td>
    <td>Set to <code>true</code> to turn on weighting of tags.</td>
	</tr>	<tr class="odd">
    <td><code>weightFrom</code><sup><a href="#weights">[4]</a></sup></td>
    <td><code class="keyword">null</code></td>
    <td>The link attribute to take the tag weight from. The default of <code>null</code> means that the weight is taken from the calculated link font size.</td>
	</tr>	<tr>
    <td><code>weightGradient</code><sup><a href="#weights">[4]</a></sup></td>
    <td><code>"{0:'#f00', 0.33:'#ff0',<br> 0.66:'#0f0', 1:'#00f'}"</code></td>
    <td>The colour gradient used for colouring tags, backgrounds, etc. when using a colour-based weight mode.</td>
	</tr>	<tr class="odd">
    <td><code>weightMode</code><sup><a href="#weights">[4]</a></sup></td>
    <td><code>""size""</code></td>
    <td>Method to use for displaying tag weights. Should be one of:
  <dl>
    <dt>size</dt>
    <dd>Display more significant tags in a larger font size.</dd>
    <dt>colour</dt>
    <dd>Display tags using colour values from the <code>weightGradient</code> option.</dd>
    <dt>both</dt>
    <dd>Use both size and colour to visualise weights.</dd>
    <dt>bgcolour</dt>
    <dd>Use a <code>weightGradient</code> to set the tag background colour.</dd>
    <dt>bgoutline</dt>
    <dd>Use a <code>weightGradient</code> to set the tag background outline colour. Tag background outlines must be enabled using the <code>bgOutlineThickness</code> option.</dd>
    <dt>outline</dt>
    <dd>Use a <code>weightGradient</code> to set the tag highlight colour.</dd>
  </dl></td>
	</tr>	<tr>
    <td><code>weightSize</code><sup><a href="#weights">[4]</a></sup></td>
    <td><code>1.0</code></td>
    <td>Multiplier for adjusting the size of tags when using a weight mode of <code>size</code> or <code>both</code>.</td>
	</tr>	<tr class="odd">
    <td><code>weightSizeMax</code><sup><a href="#weights">[4]</a></sup></td>
    <td><code class="keyword">null</code></td>
    <td>Maximum font size when weighted sizing is enabled.</td>
	</tr>	<tr>
    <td><code>weightSizeMin</code><sup><a href="#weights">[4]</a></sup></td>
    <td><code class="keyword">null</code></td>
    <td>Minimum font size when weighted sizing is enabled.</td>
	</tr>	<tr class="odd">
    <td><code>wheelZoom</code></td>
    <td><code class="keyword">true</code></td>
    <td>Enables zooming the cloud in and out using the mouse wheel or scroll gesture.</td>
	</tr>	<tr>
    <td><code>zoom</code></td>
    <td><code>1.0</code></td>
    <td>Adjusts the relative size of the tag cloud in the canvas. Larger values will zoom into the cloud, smaller values will zoom out.</td>
	</tr>	<tr class="odd">
    <td><code>zoomMax</code></td>
    <td><code>3.0</code></td>
    <td>Maximum zoom value.</td>
	</tr>	<tr>
    <td><code>zoomMin</code></td>
    <td><code>0.3</code></td>
    <td>Minimum zoom value.</td>
	</tr>	<tr class="odd">
    <td><code>zoomStep</code></td>
    <td><code>0.05</code></td>
    <td>The amount that the zoom is changed by with each movement of the mouse wheel.</td>
	</tr></tbody></table>

### TagToFront options
<table class="options" border="1">
  <tbody><tr>
    <th>Option</th><th>Default</th><th>Description</th>
	</tr>	<tr class="odd">
    <td><code>id</code></td>
    <td><code class="keyword">null</code></td>
    <td>ID of tag to move to front</td>
	</tr>	<tr>
    <td><code>index</code></td>
    <td><code class="keyword">null</code></td>
    <td>Array index of tag to move to front</td>
	</tr>	<tr class="odd">
    <td><code>text</code></td>
    <td><code class="keyword">null</code></td>
    <td>Text content of tag to move to front</td>
	</tr>	<tr>
    <td><code>time</code></td>
    <td><code>500</code></td>
    <td>Duration of movement in milliseconds</td>
	</tr>	<tr class="odd">
    <td><code>callback</code></td>
    <td><code class="keyword">null</code></td>
    <td>Function to call after movement has completed</td>
	</tr>	<tr>
    <td><code>active</code></td>
    <td><code class="keyword">false</code></td>
    <td>If true, highlights the tag while it is in motion</td>
	</tr></tbody></table>

### RotateTag options
<table class="options" border="1">
  <tbody><tr>
    <th>Option</th><th>Default</th><th>Description</th>
	</tr>	<tr class="odd">
    <td><code>id</code></td>
    <td><code class="keyword">null</code></td>
    <td>ID of tag to move to front</td>
	</tr>	<tr>
    <td><code>index</code></td>
    <td><code class="keyword">null</code></td>
    <td>Array index of tag to move to front</td>
	</tr>	<tr class="odd">
    <td><code>text</code></td>
    <td><code class="keyword">null</code></td>
    <td>Text content of tag to move to front</td>
	</tr>	<tr>
    <td><code>time</code></td>
    <td><code>500</code></td>
    <td>Duration of movement in milliseconds</td>
	</tr>	<tr class="odd">
    <td><code>callback</code></td>
    <td><code class="keyword">null</code></td>
    <td>Function to call after movement has completed</td>
	</tr>	<tr>
    <td><code>active</code></td>
    <td><code class="keyword">false</code></td>
    <td>If true, highlights the tag while it is in motion</td>
	</tr>	<tr class="odd">
    <td><code>lat</code></td>
    <td><code class="keyword">null</code></td>
    <td>Latitude of destination</td>
	</tr>	<tr>
    <td><code>lng</code></td>
    <td><code class="keyword">null</code></td>
    <td>Longitude of destination</td>
	</tr></tbody></table>
