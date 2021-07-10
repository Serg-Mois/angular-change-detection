# angular-change-detection
How change detection, markForCheck and detectChanges works

OnPush strategy doesn't trigger change detection on setInterval.
To run change detection - we need to mark element dirty. 
By clicking on any button - there is called addEventListener, that included in triggers list of OnPush strategy. 

Marking element as dirty ( including explicitly changeDetectorRef.markForCheck()) also marks all it's parents. So when you click on the child, or on the super-child button - the parent element is also marked dirty, and change detection will be run for it.

But marking parent element dirty do not mark child elements. 

changeDetectorRef.detectChanges() - runs change detection for current element and it's childs, and updates the view only if current element or child elements was marked dirty. 

So for example if we run change detection for child element - but super element wasn't marked ( markForCheck or other trigerable actions didn't happened), even if state is actually updated ( through the setInterval on OnPush) - super-child will not be updated.

Detached from change detection elements ( using changeDetectorRef.detach ) also impact on parent elements ( marking them dirty on self events).